import pandas as pd
#import nltk
#from nltk.stem.porter import PorterStemmer
#from sklearn.feature_extraction.text import TfidfVectorizer
#from sklearn.metrics.pairwise import cosine_similarity


df = pd.read_csv("music_data.csv")
df.head(5)
df.shape
df.isnull().sum()
df['tags'][0]
df.shape
df['tags'] = df['tags'].str.lower().replace(r'^\w\s', ' ').replace(r'\n', ' ', regex = True)


#stemmer = PorterStemmer()
import numpy as np

def tokenize(text):
    return text.split()  # Simple word tokenization

def calculate_tfidf(docs):
    # Step 1: Tokenize documents
    tokenized_docs = [tokenize(doc) for doc in docs]

    # Step 2: Compute TF (Term Frequency)
    tf = {}
    for doc in tokenized_docs:
        for word in doc:
            if word not in tf:
                tf[word] = 1
            else:
                tf[word] += 1

    # Step 3: Compute IDF (Inverse Document Frequency)
    idf = {}
    num_docs = len(docs)
    for word in tf:
        num_docs_with_term = sum(1 for doc in tokenized_docs if word in doc)
        idf[word] = np.log(num_docs / (1 + num_docs_with_term))

    # Step 4: Compute TF-IDF
    tfidf_matrix = np.zeros((len(docs), len(tf)))
    for i, doc in enumerate(tokenized_docs):
        for j, word in enumerate(tf.keys()):
            tfidf_matrix[i, j] = tf.get(word, 0) * idf.get(word, 0)

    return tfidf_matrix

def cosine_similarity(matrix):
    num_docs = matrix.shape[0]
    similarity = np.zeros((num_docs, num_docs))
    for i in range(num_docs):
        for j in range(num_docs):
            dot_product = np.dot(matrix[i], matrix[j])
            norm_i = np.linalg.norm(matrix[i])
            norm_j = np.linalg.norm(matrix[j])
            similarity[i, j] = dot_product / (norm_i * norm_j)
    return similarity

# Example usage:
docs = df['tags']  # Assuming 'tags' is a column in your DataFrame containing text data
tfidf_matrix = calculate_tfidf(docs)
similarity_matrix = cosine_similarity(tfidf_matrix)

# Now you can use the similarity matrix for recommendations as before
def recommendation(song_df):
    idx = df[df['title'] == song_df].index[0]
    distances = sorted(list(enumerate(similarity_matrix[idx])),reverse=True,key=lambda x:x[1])
    
    songs = []
    for m_id in distances[1:6]:
        songs.append(df.iloc[m_id[0]].title)
        
    return songs

# def tokenization(txt):
#     tokens = nltk.word_tokenize(txt)
#     stemming = [stemmer.stem(w) for w in tokens]
#     return " ".join(stemming)

# df['tags'] = df['tags'].apply(lambda x: tokenization(x))



# tfidvector = TfidfVectorizer(analyzer='word')
# matrix = tfidvector.fit_transform(df['tags'])


# #cosine similarity
# similarity = cosine_similarity(matrix)
# df[df['title'] == 'Breakfast in Paris']
# def recommendation(song_df):
#     idx = df[df['title'] == song_df].index[0]
#     distances = sorted(list(enumerate(similarity[idx])),reverse=True,key=lambda x:x[1])
    
#     songs = []
#     for m_id in distances[1:6]:
#         songs.append(df.iloc[m_id[0]].title)
        
#     return songs
print(recommendation('Breakfast in Paris'))