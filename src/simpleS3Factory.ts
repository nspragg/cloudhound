import * as AWS from 'aws-sdk';

export async function getClient(): Promise<AWS.S3> {
  return new AWS.S3({ apiVersion: '2006-03-01' });
}
