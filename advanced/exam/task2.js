class BookClub{

    constructor(library){
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author){
        let bool = false;

        for(let book of this.books){
            if(book.title == title){
                bool = true;
                break;
            }
        }
        if(bool){
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        }
        else{
            this.books.push({title : title, author: author});
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }

    addMember(memberName){
        if(this.members.includes(memberName)){
            return `Member ${memberName} is already a part of the book club.`
        }
        else{
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`
        }
    }

    assignBookToMember (memberName, bookTitle){
        if(!this.members.includes(memberName)){
            throw new Error(`Error: Member ${memberName} not found.`);
        }
        
        let currentBook = this.books.find(book => book.title == bookTitle);

        if(!currentBook){
            throw new Error(`Book "${bookTitle}" not found.`);
        }
        this.books = this.books.filter(book => book.title != bookTitle)

        return `Member ${memberName} has been assigned the book "${currentBook.title}" by ${currentBook.author}.`
 
    }

    generateReadingReport (){
        if(this.members.length == 0){
            return `No members in the book club.`
        }
        if(this.books.length == 0){
            return `No available books in the library.`
        }
        let message = `Available Books in ${this.library} library:\n`

        for(let i = 0; i < this.books.length; i++){
            let book = this.books[i];
            message += `"${book.title}" by ${book.author}`;
            if (i != this.books.length - 1) {
                message += '\n';
            }
        }

        return message;

    }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());








