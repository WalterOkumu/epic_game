const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    [
      "Johnny Cage",
      "Kano",
      "Liu Kang",
      "Raiden",
      "Scorpion",
      "Sonya Blade",
      "Sub-Zero",
      "Goro",
      "Reptile",
    ], // Character Names
    [
      "https://upload.wikimedia.org/wikipedia/en/7/7b/Johnny_Render_mk_11.png",
      "https://upload.wikimedia.org/wikipedia/en/8/81/KanoMKXrender.png",
      "https://upload.wikimedia.org/wikipedia/en/9/92/LiuKangMKXRender.png",
      "https://upload.wikimedia.org/wikipedia/en/0/06/Raidenmk11.png",
      "https://upload.wikimedia.org/wikipedia/en/6/6c/ScorpionMKXRender.png",
      "https://upload.wikimedia.org/wikipedia/en/7/72/Sonya_MK_11.png",
      "https://upload.wikimedia.org/wikipedia/en/a/a7/SubZeroMKXrender.png",
      "https://upload.wikimedia.org/wikipedia/en/f/f7/Goro_%28Mortal_Kombat%29.png",
      "https://upload.wikimedia.org/wikipedia/en/b/bf/ReptileMKXrender.png"
    ], // Images
    [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ], // HP values
    [
      100,
      150,
      200,
      250,
      300,
      250,
      300,
      350,
      400
    ], // Attack damage values
    "Shang Tsung", // Boss Name
    "https://upload.wikimedia.org/wikipedia/en/8/84/MK11YoungShangTsung.png", // Boss image
    10000, // Boss HP
    75 // Boss attack damage
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  // let txn;

  // for(let i = 0; i < 9; i++) {
  //   txn = await gameContract.mintCharacterNFT(i);
  //   await txn.wait();
  //   console.log("Minted NFT #" + (i + 1));
  // }

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // console.log("Done deploying and minting!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();