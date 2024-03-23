import sys

class PorterStemmer:

    def __init__(self):
        """The main part of the stemming algorithm starts here.
        word is a buffer holding a word to be stemmed. The letters are in word[start],
        word[start+1] ... ending at word[end]. In fact start = 0 in this demo program. end is
        readjusted downwards as the stemming progresses. Zero termination is
        not in fact used in the algorithm.

        Note that only lower case sequences are stemmed. Forcing to lower case
        should be done before stem(...) is called.
        """

        self.word = ""  # buffer for word to be stemmed
        self.end = 0
        self.start = 0
        self.j = 0   # j is a general offset into the string

    def is_consonant(self, i):
        """is_consonant(i) is TRUE <=> word[i] is a consonant."""
        if self.word[i] == 'a' or self.word[i] == 'e' or self.word[i] == 'i' or self.word[i] == 'o' or self.word[i] == 'u':
            return 0
        if self.word[i] == 'y':
            if i == self.start:
                return 1
            else:
                return (not self.is_consonant(i - 1))
        return 1

    def mesaure(self):
        """mesaure() measures the number of consonant sequences between start and j.
        if c is a consonant sequence and v a vowel sequence, and <..>
        indicates arbitrary presence,

           <c><v>       gives 0
           <c>vc<v>     gives 1
           <c>vcvc<v>   gives 2
           <c>vcvcvc<v> gives 3
           ....
        """
        n = 0
        i = self.start
        while 1:
            if i > self.j:
                return n
            if not self.is_consonant(i):
                break
            i = i + 1
        i = i + 1
        while 1:
            while 1:
                if i > self.j:
                    return n
                if self.is_consonant(i):
                    break
                i = i + 1
            i = i + 1
            n = n + 1
            while 1:
                if i > self.j:
                    return n
                if not self.is_consonant(i):
                    break
                i = i + 1
            i = i + 1

    def contains_vowel(self):
        """contains_vowel() is TRUE <=> start,...j contains a vowel"""
        for i in range(self.start, self.j + 1):
            if not self.is_consonant(i):
                return 1
        return 0

    def ends_with_double_consonant(self, j):
        """ends_with_double_consonant(j) is TRUE <=> j,(j-1) contain a double consonant."""
        if j < (self.start + 1):
            return 0
        if (self.word[j] != self.word[j-1]):
            return 0
        return self.is_consonant(j)

    def ends_with_cvc(self, i):
        """ends_with_cvc(i) is TRUE <=> i-2,i-1,i has the form consonant - vowel - consonant
        and also if the second c is not w,x or y. this is used when trying to
        restore an e at the end of a short  e.g.

           cav(e), lov(e), hop(e), crim(e), but
           snow, box, tray.
        """
        if i < (self.start + 2) or not self.is_consonant(i) or self.is_consonant(i-1) or not self.is_consonant(i-2):
            return 0
        ch = self.word[i]
        if ch == 'w' or ch == 'x' or ch == 'y':
            return 0
        return 1

    def ends(self, s):
        """ends(s) is TRUE <=> start,...end ends with the string s."""
        length = len(s)
        if s[length - 1] != self.word[self.end]: # tiny speed-up
            return 0
        if length > (self.end - self.start + 1):
            return 0
        if self.word[self.end-length+1:self.end+1] != s:
            return 0
        self.j = self.end - length
        return 1

    def setto(self, s):
        """setto(s) sets (j+1),...end to the characters in the string s, readjusting end."""
        length = len(s)
        self.word = self.word[:self.j+1] + s + self.word[self.j+length+1:]
        self.end = self.j + length

    def replace_by(self, s):
        """replace_by(s) is used further down."""
        if self.mesaure() > 0:
            self.setto(s)

    def step1ab(self):
        """step1ab() gets rid of plurals and -ed or -ing. e.g.

           caresses  ->  caress
           ponies    ->  poni
           ties      ->  ti
           caress    ->  caress
           cats      ->  cat

           feed      ->  feed
           agreed    ->  agree
           disabled  ->  disable

           matting   ->  mat
           mating    ->  mate
           meeting   ->  meet
           milling   ->  mill
           messing   ->  mess

           meetings  ->  meet
        """
        if self.word[self.end] == 's':
            if self.ends("sses"):
                self.end = self.end - 2
            elif self.ends("ies"):
                self.setto("i")
            elif self.word[self.end - 1] != 's':
                self.end = self.end - 1
        if self.ends("eed"):
            if self.mesaure() > 0:
                self.end = self.end - 1
        elif (self.ends("ed") or self.ends("ing")) and self.contains_vowel():
            self.end = self.j
            if self.ends("at"):   self.setto("ate")
            elif self.ends("bl"): self.setto("ble")
            elif self.ends("iz"): self.setto("ize")
            elif self.ends_with_double_consonant(self.end):
                self.end = self.end - 1
                ch = self.word[self.end]
                if ch == 'l' or ch == 's' or ch == 'z':
                    self.end = self.end + 1
            elif (self.mesaure() == 1 and self.ends_with_cvc(self.end)):
                self.setto("e")

    def step1c(self):
        """step1c() turns terminal y to i when there is another vowel in the stem."""
        if (self.ends("y") and self.contains_vowel()):
            self.word = self.word[:self.end] + 'i' + self.word[self.end+1:]

    def step2(self):
        """step2() maps double suffices to single ones.
        so -ization ( = -ize plus -ation) maps to -ize etc. note that the
        string before the suffix must give mesaure() > 0.
        """
        if self.word[self.end - 1] == 'a':
            if self.ends("ational"):   self.replace_by("ate")
            elif self.ends("tional"):  self.replace_by("tion")
        elif self.word[self.end - 1] == 'c':
            if self.ends("enci"):      self.replace_by("ence")
            elif self.ends("anci"):    self.replace_by("ance")
        elif self.word[self.end - 1] == 'e':
            if self.ends("izer"):      self.replace_by("ize")
        elif self.word[self.end - 1] == 'l':
            if self.ends("bli"):       self.replace_by("ble") # --DEPARTURE--
            # To match the published algorithm, replace this phrase with
            #   if self.ends("abli"):      self.replace_by("able")
            elif self.ends("alli"):    self.replace_by("al")
            elif self.ends("entli"):   self.replace_by("ent")
            elif self.ends("eli"):     self.replace_by("e")
            elif self.ends("ousli"):   self.replace_by("ous")
        elif self.word[self.end - 1] == 'o':
            if self.ends("ization"):   self.replace_by("ize")
            elif self.ends("ation"):   self.replace_by("ate")
            elif self.ends("ator"):    self.replace_by("ate")
        elif self.word[self.end - 1] == 's':
            if self.ends("alism"):     self.replace_by("al")
            elif self.ends("iveness"): self.replace_by("ive")
            elif self.ends("fulness"): self.replace_by("ful")
            elif self.ends("ousness"): self.replace_by("ous")
        elif self.word[self.end - 1] == 't':
            if self.ends("aliti"):     self.replace_by("al")
            elif self.ends("iviti"):   self.replace_by("ive")
            elif self.ends("biliti"):  self.replace_by("ble")
        elif self.word[self.end - 1] == 'g': # --DEPARTURE--
            if self.ends("logi"):      self.replace_by("log")
        # To match the published algorithm, delete this phrase

    def step3(self):
        """step3() dels with -ic-, -full, -ness etc. similar strategy to step2."""
        if self.word[self.end] == 'e':
            if self.ends("icate"):     self.replace_by("ic")
            elif self.ends("ative"):   self.replace_by("")
            elif self.ends("alize"):   self.replace_by("al")
        elif self.word[self.end] == 'i':
            if self.ends("iciti"):     self.replace_by("ic")
        elif self.word[self.end] == 'l':
            if self.ends("ical"):      self.replace_by("ic")
            elif self.ends("ful"):     self.replace_by("")
        elif self.word[self.end] == 's':
            if self.ends("ness"):      self.replace_by("")

    def step4(self):
        """step4() takes off -ant, -ence etc., in context <c>vcvc<v>."""
        if self.word[self.end - 1] == 'a':
            if self.ends("al"): pass
            else: return
        elif self.word[self.end - 1] == 'c':
            if self.ends("ance"): pass
            elif self.ends("ence"): pass
            else: return
        elif self.word[self.end - 1] == 'e':
            if self.ends("er"): pass
            else: return
        elif self.word[self.end - 1] == 'i':
            if self.ends("ic"): pass
            else: return
        elif self.word[self.end - 1] == 'l':
            if self.ends("able"): pass
            elif self.ends("ible"): pass
            else: return
        elif self.word[self.end - 1] == 'n':
            if self.ends("ant"): pass
            elif self.ends("ement"): pass
            elif self.ends("ment"): pass
            elif self.ends("ent"): pass
            else: return
        elif self.word[self.end - 1] == 'o':
            if self.ends("ion") and (self.word[self.j] == 's' or self.word[self.j] == 't'): pass
            elif self.ends("ou"): pass
            # takes care of -ous
            else: return
        elif self.word[self.end - 1] == 's':
            if self.ends("ism"): pass
            else: return
        elif self.word[self.end - 1] == 't':
            if self.ends("ate"): pass
            elif self.ends("iti"): pass
            else: return
        elif self.word[self.end - 1] == 'u':
            if self.ends("ous"): pass
            else: return
        elif self.word[self.end - 1] == 'v':
            if self.ends("ive"): pass
            else: return
        elif self.word[self.end - 1] == 'z':
            if self.ends("ize"): pass
            else: return
        else:
            return
        if self.mesaure() > 1:
            self.end = self.j

    def step5(self):
        """step5() removes a final -e if mesaure() > 1, and changes -ll to -l if
        mesaure() > 1.
        """
        self.j = self.end
        if self.word[self.end] == 'e':
            a = self.mesaure()
            if a > 1 or (a == 1 and not self.ends_with_cvc(self.end-1)):
                self.end = self.end - 1
        if self.word[self.end] == 'l' and self.ends_with_double_consonant(self.end) and self.mesaure() > 1:
            self.end = self.end -1

    def stem(self, p):
        """In stem(p,i,j), p is a char pointer, and the string to be stemmed
        is from p[i] to p[j] inclusive. Typically i is zero and j is the
        offset to the last character of a string, (p[j+1] == '\0'). The
        stemmer adjusts the characters p[i] ... p[j] and returns the new
        end-point of the string, end. Stemming never increases word length, so
        i <= end <= j. To turn the stemmer into a module, declare 'stem' as
        extern, and delete the remainder of this file.
        """
        # copy the parameters into statics
        i = 0
        j = len(p)-1
        self.word = p
        self.end = j
        self.start = i
        if self.end <= self.start + 1:
            return self.word # --DEPARTURE--

        # With this line, strings of length 1 or 2 don't go through the
        # stemming process, although no mention is made of this in the
        # published algorithm. Remove the line to match the published
        # algorithm.

        self.step1ab()
        self.step1c()
        self.step2()
        self.step3()
        self.step4()
        self.step5()
        return self.word[self.start:self.end+1]




# if __name__ == "__main__":
#     word = "valency"
#     stemmer = PorterStemmer()
#     stemmed_word = stemmer.stem(word, 0, len(word)-1)
#     print(stemmed_word)