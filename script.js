// let str = `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dolor eligendi sed voluptas harum atque, impedit necessitatibus odit. Molestias id dolores reiciendis ducimus nam deleniti, ex doloremque ab consequuntur atque a modi accusamus natus quos provident accusantium vel, cumque illum aut voluptas adipisci. Nemo fugit ipsam explicabo ipsa, tenetur facilis perferendis laborum aliquam sed soluta? Dolorum, sit?"`;

let str = `"Here's to the ones that we got...Cheers to the wish you were here, but you're not...'Cause the drinks bring back all the memories...Of everything we've been through...Toast to the ones here today...Toast to the ones that we lost on the way...'Cause the drinks bring back all the memories...And the memories bring back, memories bring back you...There's a time that I remember, when I did not know no pain...When I believed in forever, and everything would stay the same...Now my heart feel like December when somebody say your name...'Cause I can't reach out to call you, but I know I will one day, yeah...Everybody hurts sometimes...Everybody hurts someday, ayy ayy...But everything gon' be alright...Go and raise a glass and say, ayy...Here's to the ones that we got...Cheers to the wish you were here, but you're not...'Cause the drinks bring back all the memories...Of everything we've been through...Toast to the ones here today...Toast to the ones that we lost on the way...'Cause the drinks bring back all the memories...And the memories bring back, memories bring back you...Doo doo, doo doo doo doo...Doo doo doo doo, doo doo doo doo...Doo doo doo doo, doo doo doo...Memories bring back, memories bring back you...There's a time that I remember when I never felt so lost...When I felt all of the hatred was too powerful to stop (ooh, yeah)...Now my heart feel like an ember and it's lighting up the dark...I'll carry these torches for ya that you know I'll never drop, yeah...Everybody hurts sometimes...Everybody hurts someday, ayy ayy...But everything gon' be alright...Go and raise a glass and say, ayy...Here's to the ones that we got (oh)...Cheers to the wish you were here, but you're not...'Cause the drinks bring back all the memories...Of everything we've been through (no, no)...Toast to the ones here today (ayy)...Toast to the ones that we lost on the way...'Cause the drinks bring back all the memories (ayy)...And the memories bring back, memories bring back you...Doo doo, doo doo doo doo...Doo doo doo doo, doo doo doo doo...Doo doo doo doo, doo doo doo...Memories bring back, memories bring back you...Doo doo, doo doo doo doo...Doo doo doo doo, doo doo doo doo...Doo doo doo doo, doo doo doo (ooh, yeah)...Memories bring back, memories bring back you...Yeah, yeah, yeah...Yeah, yeah, yeah, yeah, yeah, doh, doh...Memories bring back, memories bring back you"`;


document.getElementById("content").innerHTML = str;
let counter = 0;

// cause of json.stringyfy the answer board has "" this marks as the first and last character. for the same reason we have added "" marks at first and last place.

function check() {
  let valuee = document.getElementById("practise").value;
  let valuestr = JSON.stringify(valuee);

// we have done valuestr.length-1 cause in slice(x,y) y is not included and at valuestr.length = 3 , the index will be 2 which in `"L"`, will be the last " mark but the same index 2 at str = `"Lorem..." will be o. therfore it wont match. But at valuestr.length-1 answer will be L at index 1 and in question it will be L at index 1

  let ans = valuestr.slice(0, valuestr.length - 1);
  let ques = str.slice(0, valuestr.length - 1);

//   console.log(ans);
//   console.log(ques);
  
 
 // if will turn the board white if empty
  if (ans === `"`) {
      document.getElementById("practise").style.backgroundColor = "white";
    document.getElementById("content").style.backgroundColor = "white";
} 
// else if will turn board green if correct 
else if (ans === ques) {
    document.getElementById("practise").style.backgroundColor = "green";
    document.getElementById("content").style.backgroundColor = "green";
  } 
  // else if will turn board red if wrong
  else if (ans != ques) {
    document.getElementById("practise").style.backgroundColor = "red";
    document.getElementById("content").style.backgroundColor = "red";
    
    counter++;
    document.getElementById('try').innerHTML = `<b> Mistake = ${counter}  <b>`

  }
}


// function check(){

// let valuee = document.getElementById('practise').value;
// let valuestr = JSON.stringify(valuee);

// let ans = valuestr.slice(0,valuestr.length-1)
// let ques = str.slice(0,valuestr.length-1)

//         if(ans === ques){
//             document.getElementById("practise").style.backgroundColor = 'green';
//             document.getElementById("content").style.backgroundColor = 'green';
//         } else{
//             document.getElementById("practise").style.backgroundColor = 'red';
//             document.getElementById("content").style.backgroundColor = 'red';
//         }
//         }