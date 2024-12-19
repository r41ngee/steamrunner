fetch('example-api-return.json')
    .then(response => response.json())
    .then(data => {
        originalData = data.games;
        
        let underheader = document.createElement("h4");
        underheader.innerHTML = `Games count: ${originalData.game_count}`;
        underheader.classList = "site-header games-count"
        document.getElementsByClassName("site-header")[0].after(underheader);
})