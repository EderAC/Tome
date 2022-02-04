{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "eder@raizs2021",
  "database": "dnd_tome",
  "entities": [
      "./src/modules/**/infra/typeorm/entities/*.ts"
  ],
  "migrations": [
      "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  "cli": {
      "migrationsDir":"./src/shared/infra/typeorm/migrations/"
  }
}



{
  "compilerOptions": {

    "target": "es2017",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "strictPropertyInitialization": false,
    "baseUrl": "./src",
    "paths": {
        "@modules/*":["modules/*"],
        "@config/*":["config/*"],
        "@shared/*":["shared/*"]
    },
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
