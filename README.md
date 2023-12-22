# zahls.ch

**zahls.ch SDK** for NodeJS with TypeScript support.

Supported **zahls.ch API** functionalities:

- **Paylink**
- **Gateway**
- **QR code**
- **Payment Provider**
- **Payment Method**
- **Payout**
- **Transaction**
- **Design**

Unsupported **zahls.ch API** functionalities:

- **Subscription** API is still in experimental state, hence it will not be supported by this library


## Disclaimer 🚧

This library is a fork of the unofficial payrexx-sdk which is developed independently.

Please note that **QR code** is not fully tested.

## How to use 🖥️

Install library by running command

```shell
npm i zahls-sdk
```

Start by creating the zahls.ch client. You will need to provide your **zahls.ch** instance and API secret.

```ts
const client = new ZahlsClient('ZAHLS_INSTANCE', 'API_SECRET')
```

### API

API is grouped by zahls.ch functionalities:

```ts
client.api.paylink
client.api.gateway
client.api.qrCode
client.api.paymentProvider
client.api.paymentMethod
client.api.payout
client.api.transaction
client.api.design
```

#### Use examples

##### Retrieve a paylink

```ts
await client.api.paylink.retrieve(id);
```

##### Create a paylink

```ts
const request = new PaylinkRequest('title', 'description', 'referenceId', 'purpose', amount, 'currency');
request.addField('forename', true, 'Name');
request.addField('surname', false, 'Last Name');

const result = await client.api.paylink.create(request);
```

##### Delete a paylink

```ts
await client.api.paylink.remove(id)
```

## Requirements

This library requires minimum **Node v18** in order to run correctly.
