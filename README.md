# mediasys.practice

Practice repository for mediasys tasks

A. Steps to upload to GitHub in case of locally initialized project:

    1. Create local folder and initialize using "git init"
    
    2. Establish remote connection using "get remote add origin <http repo link>"
    
    3. Check for mismatch between (default branch name of local repo) and (default branch name of online repo), then
        Either change the local repo branch accordingly using "git branch -m <new branch name>"
        Or I can also just add and stage the files by commiting, then push to create a new branch with the mismatched name
    
    4. Add files using "git add ." (all files) or "git add <file1> <file2>" (individual files)
    
    5. Commit to stage via git commit -m "Commit message"
    
    6. Remove files by using "git reset" -> this unstages and resets all files
    
    7. Push to online repo using "git push origin <branch name>"


B. React setup: {
    What is React.js? ->  it is a JS library used to build U.I in a far more flexible and efficient way than most available web tech.
    Importance of react -> react.js allows us to reuse pieces of code by storing them as functions, these functions are called as components.
}

    1. Adding a react library: 
        a. add core react library script
            <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        
        b. Add a custom script file as a tag in my html eg: <script type="text/javascript" src="js/app.js"></script>
        
        c. the above order of adding script tags should be maintained

    2. Install Babel extension from VS code: {Babel extension details: publisher: Michael McDermott}



