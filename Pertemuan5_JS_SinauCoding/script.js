var bus = 1;
while (bus <= 10) {
  if (bus == 8) {
    console.log("Bus transjakarta " + bus + " sedang lembur.");
  } else {
    if (bus >= 7 && bus != 8) {
      console.log("Bus transjakarta " + bus + " sedang tidak beroperasi.");
    } else {
      console.log("Bus transjakarta " + bus + " beroperasi dengan baik.");
    }
  }
  bus++;
}
