module.exports = function(robot) {
    robot.respond(/is it (weekend|holiday)\s?\?/i, msg => {
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    })

    robot.hear(/lima/i, res => {
        res.reply("O Lima? Lima é tio meu")
    })

    robot.hear(/uma música/i, res =>{
        res.send(res.random([
            "fio de cabelo... mas eu estou de saco cheio de fio de cabelo",
            "bumbum granada",
            "qualquer uma do Katinguelê"
        ]))
    })

    robot.enter(res => {
        res.send('Buenas!')
    })

    robot.leave(res => {
        res.send('Partiu?')
    })

    robot.listen(message => {
        return Math.random() > 0.8
    }, res => {
        res.reply("Oi... quer tc?")
    })
}