/*
basic search;
http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c72769bf6247bcaa0721edc3daa757a5&hash=49fceb29a6084a13d39edfda8b884510

Your public key
c72769bf6247bcaa0721edc3daa757a5

Your private key
29c02676eb3629c4a5bcfe4cde2e91be7819a953 */

/* hash code : 129c02676eb3629c4a5bcfe4cde2e91be7819a953c72769bf6247bcaa0721edc3daa757a5
 md5 code : 49fceb29a6084a13d39edfda8b884510
 ts - a timestamp (or other long string which can change on a request-by-request basis)
hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call
 as follows: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 
 (the hash value is the md5 digest of 1abcd1234) */

 export const publicKey = 'c72769bf6247bcaa0721edc3daa757a5';
 export const privateKey = '49fceb29a6084a13d39edfda8b884510';
 
 export const apiKeyForGif = `2QjWzTGwZD9EneGRY5ePLaxzZWPARbiH`;
 // example : http://api.giphy.com/v1/gifs/search?q=marvel+hulk&api_key=2QjWzTGwZD9EneGRY5ePLaxzZWPARbiH&limit=1