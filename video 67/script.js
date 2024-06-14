console.log("This is video 67.");

// gives all the nodes
document.body.childNodes;

// gives the first element of the child nodes of the body. can be used like arrays
document.body.childNodes[0];
document.body.childNodes[1];

// gives the first child in the body which is an element.
document.body.firstElementChild;

// gives the child nodes of the first element child of the body
document.body.firstElementChild.childNodes;

// this gives only the children which are elments
document.body.firstElementChild.children;

// this will give the output Box5, because 3rd child is the Box4 and its next sibling would be Box5.
document.body.firstElementChild.children[3].nextElementSibling;

// this will give the output Box3
document.body.firstElementChild.children[3].previousElementSibling;

// to get the parent element
document.body.firstElementChild.children[3].parentElement;
