import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()
from django_pandas.io import read_frame
from api.models import Music  # Replace 'myapp' with the name of your Django app
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from scipy.sparse import csr_matrix
import string

# Fetching data from the database
qs = Music.objects.all()
df = read_frame(qs, fieldnames=['title', 'keywords'])

# Data preprocessing
df['keywords'] = df['keywords'].str.lower().replace('[{}]'.format(string.punctuation), ' ', regex=True)

# Tokenize could be adjusted if additional processing is needed
def tokenize(doc):
    return doc.split()

# Calculate TF-IDF
def calculate_tfidf(docs):
    tfidf_vectorizer = TfidfVectorizer(analyzer='word', tokenizer=tokenize)
    tfidf_matrix = tfidf_vectorizer.fit_transform(docs)
    return tfidf_matrix

# Calculate Cosine Similarity
def cosine_similarity(matrix):
    if not isinstance(matrix, csr_matrix):
        matrix = csr_matrix(matrix)
    # print(matrix * matrix.T)
    # return matrix * matrix.T
    num_docs = matrix.shape[0]
    similarity = np.zeros((num_docs, num_docs))
    for i in range(num_docs):
        for j in range(num_docs):
            dot_product = matrix[i].dot(matrix[j].T).toarray()[0][0]
            norm_i = np.linalg.norm(matrix[i].toarray())
            norm_j = np.linalg.norm(matrix[j].toarray())
            similarity[i, j] = dot_product / (norm_i * norm_j)
            # print(similarity)
    return similarity

# Generate Recommendations
def recommendation(title):
    idx = df[df['title'] == title].index[0]
    distances = list(enumerate(similarity_matrix[idx]))
    distances = sorted(distances, key=lambda x: x[1], reverse=True)
    
    recommended_titles = []
    for i, score in distances[1:6]:  # Assuming the first is the query itself
        recommended_titles.append(df.iloc[i]['title'])
    return recommended_titles

# Example Usage
docs = df['keywords']
tfidf_matrix = calculate_tfidf(docs)
similarity_matrix = cosine_similarity(tfidf_matrix)
# def calculate_tfidf(docs):
#     # Step 1: Tokenize documents
#     tokenized_docs = [tokenize(doc) for doc in docs]
#     print(tokenized_docs)

#     # Step 2: Compute TF (Term Frequency)
#     tf = {}
#     for doc in tokenized_docs:
#         for word in doc:
#             if word not in tf:
#                 tf[word] = 1
#             else:
#                 tf[word] += 1
#     print(tf)
#     # Step 3: Compute IDF (Inverse Document Frequency)
#     idf = {}
#     num_docs = len(tokenized_docs)
#     vocab_set = set(word for doc in tokenized_docs for word in doc)
    
#     for word in vocab_set:
#         num_docs_with_term = sum(1 for doc in tokenized_docs if word in doc)
#         idf[word] = np.log(num_docs / (1 + num_docs_with_term))
    # print(idf)
                #############################################
    # idf = {}
    # num_docs = len(docs)
    # for word in tf:
    #     num_docs_with_term = sum(1 for doc in tokenized_docs if word in doc)
    #     idf[word] = np.log(num_docs / (1 + num_docs_with_term))
    # print(idf)
                ########################################
#     # Step 4: Compute TF-IDF
    # tfidf_matrix = np.zeros((len(docs), len(tf)))
    # for i, doc in enumerate(tokenized_docs):
    #     for j, word in enumerate(tf.keys()):
    #         tfidf_matrix[i, j] = tf.get(word) * idf.get(word)
    # print(tfidf_matrix)
    # return tfidf_matrix
    # Step 4: Compute TF-IDF
    # tfidf_matrix = np.zeros((len(docs), len(tf)))

    # for i, doc in enumerate(tokenized_docs):
    #     for j, word in enumerate(tf.keys()):
    #         if word in idf:
    #             tfidf_matrix[i, j] = tf[word] * idf[word]

    # # print(tfidf_matrix)
    # return tfidf_matrix



#############################################################################################

# def tokenization(txt):
#     tokens = nltk.word_tokenize(txt)
#     stemming = [stemmer.stem(w) for w in tokens]
#     return " ".join(stemming)

# df['tags'] = df['tags'].apply(lambda x: tokenization(x))



# tfidvector = TfidfVectorizer(analyzer='word')
# matrix = tfidvector.fit_transform(df['tags'])


# #cosine similarity
# similarity = cosine_similarity(matrix)
# # df[df['title'] == 'Breakfast in Paris']
# def recommendation(song_df):
#     idx = df[df['title'] == song_df].index[0]
#     distances = sorted(list(enumerate(similarity[idx])),reverse=True,key=lambda x:x[1])
#     print(distances)
    
#     songs = []
#     for m_id in distances[1:6]:
#         songs.append(df.iloc[m_id[0]].title)
        
#     return songs
# print(recommendation('Breakfast in Paris'))