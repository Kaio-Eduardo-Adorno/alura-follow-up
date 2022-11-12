import { MongoClient } from 'mongodb';

export class ConexaoBanco {
  #uri = 'mongodb://127.0.0.1:27017/?maxPoolSize=20&w=majority';

  async conecta() {
    const client = new MongoClient(this.#uri);
    try {
      await client.connect();
      console.log('Connected successfully to server');
      return client.db('follow_up');
    } catch (err) {
      console.log(err);
    }
  }
}
