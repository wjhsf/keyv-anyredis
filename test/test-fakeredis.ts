import test from 'ava';
import keyvTestSuite from '@keyv/test-suite';
import Keyv from 'keyv';
import KeyvAnyRedis from '../src/keyv-any-redis';
import redis from 'fakeredis';

// Test the “fakeredis” client github.com/hdachev/fakeredis

const { REDIS_HOST = 'localhost' } = process.env;
const { REDIS_PORT = '6379' } = process.env;

const client = redis.createClient(Number.parseInt(REDIS_PORT, 10), REDIS_HOST);

const store = () => new KeyvAnyRedis(client);
keyvTestSuite(test, Keyv, store);
