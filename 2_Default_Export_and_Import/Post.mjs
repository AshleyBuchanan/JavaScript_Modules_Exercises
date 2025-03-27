const postList = [];

class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    publish() {
        console.log(
            `${this.title}:\n | ${this.content}\n`
        );
        this.addToList();
    }

    //additional support
    addToList() { postList.push(this) };

    //allow for client to access through class Post 
    //rather than an instance
    static listPosts() {
        console.log(`Posts:\n`);
        postList.forEach(post => {
            console.log(` | ${post.title}:\n |  | ${post.content}`);
            console.log(` |`);
        });
    }
}

export default Post;
