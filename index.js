
/*!
 *
 * @name cakesong
 *
 */

var bpm;



export function dsp(t) {
  
  var bass_seq = [75, 70 ,80 , 0 , 75 , 0];
  var bass_rythm = [1/3,1/2,2];
  var i;
  var t_measure = t % 2;
  if (t_measure < 0.2 && t_measure > 0.1)
    i = 0;  
  else if (t_measure < 0.4)
    i = 1;  
  else if (t_measure < 0.8)
    i = 2;  
  else if (t_measure < 1.8)
    i = 3;  
  else if (t_measure < 1.9)
    i = 4;
  else 
    i = 5;
  return 1 * (
    + 0.1 * Math.sin(2 * Math.PI * t * bass_seq[i])
    //+ 0.02 * (sqw(880,t*LFO2(1/3,t))*LFO2(1/2 ,t))
    + 0.4 * env(1/2,(140),5,5,t)
    + (0.01 * chord(880,1000,1200,t)*Math.exp(-(t%4))
    + 0.015 * chord(660,720,880,t)*Math.exp(-((t-0.2)%4))
    + 0.01 * chord(1100,900,770,t)*Math.exp(-((t-1)%4)))*(t<12 ? 0:1)
    + 0.03 * Noise()*Math.exp(-(t-0.5)%2*5)
    + 0.02 * (Noise()*Math.exp(-(t-0.8)%0.2*20)*Math.abs(-(((t+2)%5)-2.5)) )
    + 0.02 * sqw(11100-LFO(1/16,t)*20,t)*Math.exp(-(t-0.8)%2)*(t<20 ? 0:1)
    );
}


function LFO(measure,t){
  return Math.floor(t % 1 / measure);
  
}

function env(measure, x, y, z, t){
  var ts = t / 2 % measure;
  return Math.sin(x * (Math.exp(-ts * y))) * Math.exp(-ts * z);
}

function env2(measure, x, y, z, t){
  var ts = t % measure;
  return (x * (Math.exp(-ts * y))) * Math.exp(-ts * z);
}

function chord(freq,freq2,freq3,t){
  return Math.sin(2 * Math.PI * t * freq)
  + Math.sin(2 * Math.PI * t * freq2)
  + Math.sin(2 * Math.PI * t * freq3);
}



function LFO2(measure,t){
  return (t % 1);
  
}

function sqw(freq,t){
  return Math.sin(2 * Math.PI * t * freq) > 0 ? 1 : -1;
}


function Noise()
{
  return Math.random()*2-1;
}

function tri(x, t) {
  return Math.abs(1 - (2 * t * x) % 2) * 2 - 1;
}



function seqence(seq,t){
  
  
  return seq[i]
}