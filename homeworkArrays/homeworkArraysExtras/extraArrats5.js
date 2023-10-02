function task(arr) {
    let account = arr[0].split(" ")
    let i = 1;
    let command = arr[i];
    i++;

    while (command !== "Play!") {
        let actAndGame = command.split(" ");
        let action = actAndGame[0];
        let game = actAndGame[1];
        switch (action) {
            case "Install":
                if (!account.includes(game)) {
                    account.push(game);
                };
                break;
            case "Uninstall":
                if (account.includes(game)) {
                    let indexGame = account.indexOf(game);
                    account.splice(indexGame, 1);
                }
                break;
            case "Update":
                if (account.includes(game)) {
                    let indexGame = account.indexOf(game);
                    account.splice(indexGame, 1);
                    account.push(game);
                }
                break;
            default:
                let expansion = game.split("-")
                if (account.includes(expansion[0])) {
                    let indexGame = account.indexOf(expansion[0]) + 1;
                    account.splice(indexGame, 0, `${expansion[0]}:${expansion[1]}`)
                };
        }
        command = arr[i];
        i++;
    }
    console.log(account.join(" "))
}
task(['CS WoW Diablo',

'Install LoL',

'Uninstall WoW',

'Update Diablo',

'Expansion CS-Go',

'Play!'])