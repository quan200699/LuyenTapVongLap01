function Play() {
    let a = parseInt(prompt("Nhập điểm đầu:"));
    let b = parseInt(prompt("Nhập điểm kết:"));
    let  number = parseInt(prompt("Nhập số bạn đoán:"));
    let life = 3;
    let randomnumber = Math.round(Math.random()*(b-a)+a);
    for(var i = life;i>=0;i--)
    {
        if(i==0)
        {
            alert("You Loose!Play Again!");
            break;
        }
        if(randomnumber==number)
        {
            alert("Congratualtion!");
            break;
        }
        else
        {
            alert("Wrong!");
            alert("Please try again! You have "+i+" life");
            number = parseInt(prompt("Nhập số bạn đoán:"));
        }
    }
}