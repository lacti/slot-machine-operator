const units = [
  "",
  "K",
  "M",
  "B",
  "Tr",
  "Qd",
  "Qt",
  "Sxt",
  "Spt",
  "Ot",
  "Nn",
  "Dc",
  "Ud",
  "Dd",
  "Td",
  "Qtd",
  "Qnd",
  "Sxd",
  "Std",
  "Od",
  "Nd",
  "V",
  "Uv",
  "Dv",
  "Tv",
  "Qtv",
  "Qnv",
  "Sxv",
  "Stv",
  "Ov",
  "Nv",
  "Tg",
  "Utg",
  "Dtg",
  "Ttg",
  "Qttg",
  "Qntg",
  "Sxtg",
  "Sttg",
  "Otg",
  "Ntg",
  "Qdr",
  "Uqdr",
  "Dqdr",
  "Tqdr",
  "Qtqdr",
  "Qnqdr",
  "Sxqdr",
  "Stqdr",
  "Oqdr",
  "Nqdr",
  "Qng",
  "Uqng",
  "Dqng",
  "Tqng",
  "Qtqng",
  "Qnqng",
  "Sxqng",
  "Stqng",
  "Oqng",
  "Nqng",
  "Sxa",
  "Usxa",
  "Dsxa",
  "Tsxa",
  "Qtsxa",
  "Qnsxa",
  "Sxsxa",
  "Stsxa",
  "Osxa",
  "Nsxa",
  "Spg",
  "Uspg",
  "Dspg",
  "Tspg",
  "Qtspg",
  "Qnspg",
  "Sxspg",
  "Stspg",
  "Ospg",
  "Nspg",
  "Og",
  "Uog",
  "Dog",
  "Tog",
  "Qtog",
  "Qnog",
  "Sxog",
  "Stog",
  "Oog",
  "Nog",
  "Ng",
  "Ung",
  "Dng",
  "Tng",
  "Qtng",
  "Qnng",
  "Sxng",
  "Stng",
  "Ong",
  "Nng",
  "C",
];

export default function formatMoney(money: bigint | number): string {
  const str = money.toString();
  if (str.length <= 3) {
    return str;
  }

  const len = str.length;
  const unit = units[Math.floor((len - 1) / 3)];
  const dotPos = len % 3;
  return (
    (dotPos === 0
      ? str.substring(0, 3)
      : str.substring(0, dotPos) + "." + str.substring(dotPos, 3)) + unit
  );
}
