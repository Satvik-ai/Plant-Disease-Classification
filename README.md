# Plant Disease Classification

## Image Classification, Python(TensorFlow, Matplotlib, Numpy), FastAPI

• Overview : Trained a CNN model to identify plant diseases from the image of plant leaf and created an API to
deploy it.

• Process : Imported all the dependencies, loaded the datasets in tensorflow data objects, performed exploratory
data analysis, and then did data preprocessing like image resizing, data augmentation etc. Trained and tested CNN
model with softmax activation. Five models were trained one each for identifying disease in blackgram, groundnut,
pepper, potato and tomato. Then build a backend with the help to FastAPI to deploy the models. Models can be
accessed via an API. My friend created a frontend using react and then I integrated API to it.

## Backend

To start the backend go to the API folder, open terminal and follow the below given steps 

1. Install virtualenv:
```
$ pip install virtualenv
```

2. Create virtual environment:
```
$ virtualenv env
```

3. Install required dependencies
```
pip install -r requirements.txt
```

4. Start the backend
```
python main.py
```

## Frontend

To start the frontend go the Frontend folder, open terminal and follow the below given steps

1. Install npm
```
npm install
```

2. Start the frontend
```
npm run dev
```

## Datasets

[Pant Disease Datasets Link](https://drive.google.com/drive/folders/1ZJwMko93CY_LEmo7wdekJJW7kFO_YOgO?usp=drive_link)
