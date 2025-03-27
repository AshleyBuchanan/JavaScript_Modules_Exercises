import Post from './Post.mjs';

const myPost = new Post('Introduction', 'Hello, my name is Ashley.');
myPost.publish();

const anotherPost = new Post('Windy Days', 'Sometimes I think it\'s too windy around here.');
anotherPost.publish();

Post.listPosts();