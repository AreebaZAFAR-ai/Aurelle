import { site } from "@/lib/site";

/*
 * The Pearls wordmark: PEARLS drawn from the Gentium Book Plus outlines (2048 units per em,
 * flipped so the top of the A sits at 0 and the baseline at 1317), with the A's crossbar
 * replaced by a single pearl. The pearled A on its own is the brand mark.
 */
const TOP = -20;
const HEIGHT = 1360; // a little room for the S overshoot below the baseline
const UNITS_PER_EM = 2048;

const glyphs: Record<string, { adv: number; d: string }> = {
  P: { adv: 1101, d: "M1017 381Q1017 485 976 561.5Q935 638 871 688Q807 738 735.5 762.5Q664 787 603 787Q507 787 440 757L414 672Q455 691 491.5 696.5Q528 702 563 702Q623 702 684.5 671Q746 640 788 578Q830 516 830 422Q830 317 782.5 250Q735 183 654.5 150.5Q574 118 473 118Q368 118 256 130Q144 142 48 159L37 87Q138 61 271.5 44Q405 27 530 27Q751 27 884 118Q1017 209 1017 381ZM48 1317V1264Q115 1250 152.5 1233Q190 1216 190 1203V114H380V1203Q380 1215 414 1231Q448 1247 553 1264V1317Z" },
  E: { adv: 1036, d: "M914 84Q912 118 905.5 165.5Q899 213 890 257Q881 301 873 327H818Q814 235 793.5 196Q773 157 736 157H328L357 57H879ZM811 612Q795 640 768 676.5Q741 713 719 728Q688 699 646.5 686Q605 673 521 673H314L336 582H783ZM979 1053Q972 1139 959 1213.5Q946 1288 938 1317H48V1264Q115 1250 152.5 1233Q190 1216 190 1203V172Q190 160 155 142Q120 124 48 110V57H525V110Q458 117 419 126.5Q380 136 380 150V1153Q380 1172 394.5 1186.5Q409 1201 452.5 1209Q496 1217 584 1217H703Q765 1217 803.5 1203.5Q842 1190 870 1150Q898 1110 926 1032Z" },
  A: { adv: 1242, d: "M385 877L279 1196Q269 1227 305 1241Q341 1255 423 1264V1317H0V1264Q68 1252 107 1239Q146 1226 156 1196L520 90Q551 60 594 37.5Q637 15 672 0L1092 1196Q1102 1224 1129 1240Q1156 1256 1221 1264V1317H774V1264Q851 1259 880.5 1244Q910 1229 899 1196L789 877L582 279Z" },
  R: { adv: 1179, d: "M962 330Q962 458 898 545.5Q834 633 726 677.5Q618 722 486 722Q458 722 428.5 718.5Q399 715 368 708L362 618Q397 624 420.5 626Q444 628 469 628Q619 628 697 558.5Q775 489 775 361Q775 257 700.5 187.5Q626 118 450 118Q362 118 256 130.5Q150 143 48 159L37 87Q135 64 244 45.5Q353 27 489 27Q734 27 848 114Q962 201 962 330ZM1174 1275Q1108 1297 1038.5 1314Q969 1331 930 1331Q902 1331 874 1314.5Q846 1298 832 1276L527 705L646 639L988 1163Q1019 1206 1056.5 1217Q1094 1228 1162 1222ZM48 1317V1264Q115 1250 152.5 1233Q190 1216 190 1203V103H380V1203Q380 1215 415 1232.5Q450 1250 523 1264V1317Z" },
  L: { adv: 998, d: "M969 1053Q962 1139 949 1213.5Q936 1288 928 1317H48V1264Q115 1250 152.5 1233Q190 1216 190 1203V172Q190 160 155 142Q120 124 48 110V57H523V110Q455 124 417.5 141Q380 158 380 172V1143Q380 1178 418.5 1197.5Q457 1217 566 1217H699Q761 1217 798 1203.5Q835 1190 861.5 1150Q888 1110 916 1032Z" },
  S: { adv: 1000, d: "M770 272 724 266Q672 191 607 162Q542 133 485 133Q377 133 329.5 188Q282 243 282 300Q282 363 327.5 408.5Q373 454 445 491Q517 528 597.5 566.5Q678 605 749.5 654Q821 703 867 772Q913 841 913 940Q913 1007 884.5 1078Q856 1149 799 1210Q742 1271 655 1309Q568 1347 450 1347Q382 1347 289.5 1320.5Q197 1294 126 1249Q119 1245 115.5 1214Q112 1183 112 1138Q112 1093 116 1048.5Q120 1004 129 973L180 978Q225 1096 312 1157.5Q399 1219 501 1219Q561 1219 617.5 1190.5Q674 1162 711 1111.5Q748 1061 748 998Q748 917 702.5 863.5Q657 810 586 772Q515 734 435 698.5Q355 663 283.5 620Q212 577 167 513Q122 449 122 352Q122 306 145 250Q168 194 218 143Q268 92 347.5 59.5Q427 27 541 27Q637 27 725.5 53Q814 79 851 119Q860 127 846 158.5Q832 190 809.5 223.5Q787 257 770 272Z" },
};

const pearl = { cx: 587, cy: 815, r: 118 };

function PearlA({ x = 0 }: { x?: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <path d={glyphs.A.d} />
      <circle {...pearl} />
    </g>
  );
}

/** The pearled A alone — used where the brand needs a compact emblem. */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      className={className}
      viewBox={`0 ${TOP} ${glyphs.A.adv} ${HEIGHT}`}
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <PearlA />
    </svg>
  );
}

/** PEARLS, sized by the surrounding font size. `tracking` is letter spacing in em. */
export function Wordmark({ className, tracking = 0.28 }: { className?: string; tracking?: number }) {
  const gap = tracking * UNITS_PER_EM;
  let x = 0;
  const letters = [...site.name.toUpperCase()].map((ch) => {
    const at = x;
    x += (glyphs[ch]?.adv ?? 1000) + gap;
    return { ch, at };
  });
  const width = x - gap;

  return (
    <svg
      className={className}
      viewBox={`0 ${TOP} ${width} ${HEIGHT}`}
      style={{ height: `${HEIGHT / UNITS_PER_EM}em`, width: "auto" }}
      fill="currentColor"
      role="img"
      aria-label={site.name}
    >
      {letters.map(({ ch, at }, i) =>
        ch === "A" ? <PearlA key={i} x={at} /> : <path key={i} d={glyphs[ch]?.d} transform={`translate(${at} 0)`} />,
      )}
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", fontSize: "1.45rem", lineHeight: 1 }}>
      <Wordmark />
    </span>
  );
}
