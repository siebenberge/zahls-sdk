# Payrexx SDK

**Payrexx SDK** for NodeJS.

The library supports only *Paylink* feature from the **Payrexx API** at the moment.
Other feature will come as the library continues to be developed.

## How to use

Start first by creating the Payrexx client. You will need to provide your **Payrexx** instance and API secret.

```ts
    const client = new PayrexxClient('PAYREXX_INSTANCE', 'API_SECRET')
```

### Paylink

#### GET

<https://developers.payrexx.com/reference/retrieve-a-paylink>

Retrieve a paylink with `id`

```ts
    await client.apiV1.paylink.retrieve(id);
```

#### DELETE

<https://developers.payrexx.com/reference/remove-a-paylink>

Remove a paylink with `id`

```ts
    await client.apiV1.paylink.remove(id);
```

#### POST

<https://developers.payrexx.com/reference/create-a-paylink>

Create a paylink

```ts
    const params: PaylinkRequest =  {};
    await client.apiV1.paylink.create(params);
```

### Webhook

If you are using webhook on the Payrexx and need TS type for the reponse you can use `Transaction` interface.
Do note that `Transaction` is still WIP so not all properties are supported

## Requirements

This library requires minimum **Node v16.3.0** in order to run correctly.
