# JMS-TEST

Install the JMS from npm with `npm i firts-test-jms-npm --save`. Then, require it from your app's JavaScript files with `import {AppConfig} from 'firts-test-jms-npm'`.

## Usage

 onUpdate = async (product) => {
    if (!product?.id) {
      return null;
    }
    return firebase
      .firestore()
      .collection(AppConfig.tables.VENDOR_PRODUCTS)
      .doc(product.id)
      .update(product);
  };


  
