import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TestLinesM() {
  useGSAP(() => {
    // test();
    gsap.to('#box-1', {
      opacity: 1,
      delay: 1,
      duration: 1.5,
    });
  }, []);

  // function test() {
  //   const paths = document.querySelectorAll('path');

  //   for (let i = 0; i < paths.length; i++) {
  //     let path = paths[i];

  //     let pathLength = path.getTotalLength();

  //     path.style.strokeDasharray = pathLength;
  //     path.style.strokeDashoffset = pathLength;

  //     gsap.to('path', {
  //       strokeDashoffset: 0,
  //       duration: 2.5,
  //       ease: 'power1.inOut',
  //     });
  //   }
  // }

  return (
    <div id="fluid" className="absolute left-0">
      <svg
        id="box-1"
        className="absolute top-[25px] left-0 w-full opacity-0"
        fill="none"
        viewBox="300 0 900 900"
      >
        <g id="Frame 12">
          <path
            id="Vector"
            d="M-52.3911 114.799C9.24109 133.694 66.8991 161.982 117.812 198.304C237.957 284.767 246.941 367.895 303.607 371.577C391.168 377.261 394.087 180.265 559.244 121.352C680.374 78.1271 829.36 130.429 863.849 142.552C998.379 189.768 1033.65 261.275 1117.82 249.136C1179.4 240.313 1187.05 198.262 1278.32 165.6C1341.86 142.865 1402.11 140.335 1443.57 141.824"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_2"
            d="M-50.4022 123.025C11.2374 141.928 68.9037 170.22 119.829 206.543C239.981 293.025 248.958 376.134 305.603 379.822C393.185 385.5 396.103 188.505 561.239 129.596C682.397 86.3854 831.383 138.687 865.865 150.792C1000.4 198.008 1035.65 269.519 1119.84 257.375C1181.42 248.552 1189.05 206.506 1280.33 173.84C1343.89 151.099 1404.13 148.575 1445.59 150.063"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_3"
            d="M-48.4131 131.251C13.2299 150.148 70.8976 178.441 121.818 214.77C241.97 301.252 250.947 384.361 307.613 388.043C395.111 393.742 398.114 196.726 563.25 137.818C684.387 94.612 833.372 146.914 867.855 159.019C1002.39 206.253 1037.66 277.741 1121.82 265.602C1183.41 256.779 1191.05 214.709 1282.32 182.048C1345.87 159.307 1406.11 156.783 1447.57 158.271"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_4"
            d="M-46.3824 139.467C15.2541 158.379 72.9155 186.679 123.834 223.009C243.986 309.491 252.963 392.6 309.608 396.287C397.19 401.965 400.108 204.97 565.244 146.062C686.402 102.851 835.388 155.153 869.87 167.258C1004.41 214.492 1039.65 285.985 1123.84 273.841C1185.43 265.018 1193.05 222.953 1284.33 190.287C1347.89 167.546 1408.12 165.022 1449.59 166.511"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_5"
            d="M-44.4155 147.699C17.2241 166.603 74.8904 194.895 125.815 231.218C245.988 317.695 254.951 400.828 311.61 404.491C399.171 410.175 402.111 213.174 567.247 154.266C688.405 111.055 837.37 163.362 871.873 175.462C1006.39 222.701 1041.65 294.189 1125.82 282.05C1187.41 273.227 1195.05 231.157 1286.31 198.496C1349.87 175.755 1410.11 173.249 1451.57 174.72"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_6"
            d="M-42.4045 155.923C19.2323 174.833 76.8975 203.124 127.827 239.442C247.979 325.925 256.963 409.053 313.601 412.722C401.12 418.415 404.102 221.403 569.233 162.415C690.37 119.209 839.356 171.511 873.839 183.616C1008.38 230.851 1043.62 302.344 1127.81 290.2C1189.39 281.377 1197.02 239.312 1288.3 206.646C1351.86 183.904 1412.1 181.399 1453.58 182.864"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_7"
            d="M-40.369 164.153C21.2677 183.067 78.9256 211.376 129.833 247.719C250.006 334.195 258.969 417.328 315.628 420.991C403.195 426.693 406.135 229.694 571.271 170.786C692.422 127.556 841.386 179.863 875.89 191.963C1010.4 239.202 1045.67 310.69 1129.84 298.55C1191.42 289.727 1199.07 247.658 1290.33 214.997C1353.89 192.275 1414.13 189.75 1455.59 191.221"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_8"
            d="M-38.4248 172.315C23.2182 191.212 80.8859 219.505 131.806 255.834C251.951 342.297 260.935 425.425 317.58 429.112C405.162 434.79 408.081 237.795 573.238 178.882C694.368 135.657 843.354 187.959 877.843 200.082C1012.37 247.298 1047.62 318.791 1131.81 306.666C1193.4 297.843 1201.04 255.773 1292.31 223.131C1355.85 200.395 1416.08 197.87 1457.57 199.354"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_9"
            d="M-36.4141 180.612C25.2324 199.512 82.9061 227.803 133.838 264.126C253.984 350.589 262.947 433.723 319.613 437.405C407.131 443.099 410.113 246.087 575.229 187.122C696.381 143.893 845.346 196.2 879.856 208.318C1014.37 255.539 1049.64 327.046 1133.81 314.907C1195.39 306.084 1203.04 264.033 1294.31 231.371C1357.86 208.63 1418.1 206.106 1459.56 207.595"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_10"
            d="M-34.3615 188.818C27.2796 207.749 84.9409 236.07 135.854 272.421C256.005 358.902 264.983 442.01 321.648 445.692C409.209 451.375 412.128 254.382 577.284 195.469C698.414 152.245 847.4 204.547 881.888 216.67C1016.42 263.885 1051.67 335.396 1135.86 323.252C1197.44 314.429 1205.09 272.378 1296.36 239.717C1359.89 216.982 1420.13 214.457 1461.61 215.941"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_11"
            d="M-32.4048 197.019C29.2319 215.928 86.897 244.22 137.826 280.537C257.978 367.019 266.955 450.128 323.6 453.816C411.161 459.499 414.101 262.499 579.237 203.59C700.395 160.379 849.36 212.686 883.863 224.786C1018.37 272.007 1053.64 343.513 1137.83 331.369C1199.4 322.551 1207.05 280.5 1298.33 247.834C1361.89 225.093 1422.12 222.569 1463.59 224.057"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_12"
            d="M-30.4065 205.28C31.2331 224.183 88.8995 252.475 139.824 288.798C259.976 375.28 268.954 458.389 325.619 462.072C413.18 467.755 416.099 270.76 581.256 211.846C702.393 168.64 851.379 220.942 885.861 233.047C1020.4 280.281 1055.64 351.774 1139.83 339.63C1201.42 330.807 1209.06 288.737 1300.32 256.076C1363.86 233.341 1424.09 230.816 1465.58 232.3"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_13"
            d="M-28.3527 213.49C33.281 232.406 90.9448 260.697 141.878 297.009C262.03 383.49 271.008 466.599 327.652 470.287C415.164 475.962 418.126 278.896 583.246 220.072C704.405 176.861 853.369 229.168 887.872 241.268C1022.39 288.507 1057.65 359.995 1141.84 347.851C1203.41 339.033 1211.05 296.963 1302.34 264.297C1365.89 241.556 1426.13 239.05 1467.59 240.521"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_14"
            d="M-26.4076 221.728C35.232 240.631 92.8984 268.924 143.823 305.247C263.975 391.728 272.959 474.856 329.618 478.52C417.179 484.203 420.098 287.208 585.255 228.294C706.392 185.089 855.378 237.391 889.839 249.5C1024.38 296.735 1059.62 368.228 1143.81 356.083C1205.39 347.26 1213.04 305.191 1304.3 272.53C1367.84 249.794 1428.08 247.288 1469.56 248.753"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_15"
            d="M-24.3977 229.948C37.2389 248.858 94.904 277.15 145.833 313.467C265.985 399.949 274.969 483.076 331.607 486.745C419.147 492.433 422.108 295.428 587.25 236.539C708.408 193.328 857.373 245.635 891.876 257.734C1026.39 304.974 1061.66 376.462 1145.85 364.317C1207.41 355.499 1215.05 313.43 1306.34 280.764C1369.9 258.042 1430.14 255.517 1471.59 256.987"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_16"
            d="M-22.3385 238.177C39.3073 257.068 96.9762 285.361 147.892 321.696C268.038 408.159 277.022 491.287 333.681 494.951C421.185 500.668 424.147 303.601 589.261 244.759C710.391 201.535 859.377 253.837 893.859 265.941C1028.4 313.176 1063.64 384.669 1147.83 372.524C1209.41 363.701 1217.06 321.632 1308.32 288.971C1371.87 266.253 1432.1 263.729 1473.58 265.194"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_17"
            d="M-20.3877 246.431C41.2553 265.327 98.923 293.62 149.843 329.95C269.988 416.413 278.973 499.54 335.617 503.228C423.178 508.911 426.118 311.911 591.254 253.003C712.405 209.773 861.37 262.08 895.88 274.198C1030.39 321.419 1065.66 392.926 1149.85 380.781C1211.44 371.958 1219.06 329.912 1310.35 297.246C1373.91 274.505 1434.14 271.981 1475.6 273.47"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_18"
            d="M-18.4052 254.64C43.2378 273.536 100.905 301.829 151.826 338.158C271.971 424.621 280.955 507.748 337.62 511.431C425.16 517.119 428.1 320.12 593.27 261.244C714.4 218.019 863.386 270.321 897.875 282.444C1032.4 329.66 1067.66 401.171 1151.84 389.027C1213.43 380.204 1221.08 338.153 1312.34 305.492C1375.88 282.757 1436.11 280.232 1477.6 281.716"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_19"
            d="M-16.3306 262.846C45.3091 281.75 102.975 310.042 153.9 346.365C274.052 432.847 283.03 515.956 339.674 519.643C427.185 525.379 430.168 328.308 595.247 269.433C716.406 226.223 865.391 278.525 899.873 290.629C1034.38 337.85 1069.65 409.356 1153.84 397.212C1215.43 388.389 1223.06 346.343 1314.34 313.677C1377.9 290.936 1438.13 288.412 1479.6 289.901"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_20"
            d="M-14.3882 271.141C47.2549 290.038 104.923 318.331 155.843 354.66C275.995 441.143 284.973 524.252 341.638 527.935C429.2 533.618 432.118 336.622 597.275 277.708C718.393 234.446 867.379 286.748 901.861 298.853C1036.4 346.088 1071.64 417.581 1155.83 405.437C1217.42 396.614 1225.06 354.544 1316.32 321.882C1379.86 299.147 1440.09 296.622 1481.58 298.106"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_21"
            d="M-12.3965 279.308C49.243 298.211 106.909 326.503 157.834 362.826C277.986 449.307 286.963 532.416 343.608 536.103C431.168 541.786 434.108 344.787 599.27 285.954C720.428 242.743 869.414 295.045 903.896 307.149C1038.41 354.389 1073.68 425.876 1157.87 413.732C1219.45 404.909 1227.07 362.845 1318.36 330.179C1381.92 307.438 1442.15 304.913 1483.61 306.402"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_22"
            d="M-10.3219 287.516C51.3177 306.419 108.984 334.712 159.909 371.034C280.061 457.516 289.045 540.644 345.704 544.307C433.207 550.085 436.19 353.014 601.256 294.103C722.393 250.897 871.378 303.199 905.861 315.304C1040.4 362.538 1075.64 434.031 1159.83 421.886C1221.42 413.064 1229.06 370.994 1320.32 338.333C1383.86 315.597 1444.12 313.086 1485.58 314.557"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_23"
            d="M-8.36816 295.846C53.2687 314.756 110.934 343.048 161.863 379.365C282.016 465.848 291 548.977 347.638 552.646C435.199 558.329 438.139 361.327 603.275 302.418C724.4 259.113 873.386 311.416 907.869 323.52C1042.41 370.755 1077.65 442.249 1161.84 430.105C1223.43 421.282 1231.05 379.217 1322.33 346.55C1385.89 323.809 1446.13 321.303 1487.59 322.773"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_24"
            d="M-6.40308 304.003C55.2361 322.894 112.901 351.181 163.821 387.503C283.973 473.985 292.957 557.113 349.616 560.777C437.184 566.478 440.103 369.483 605.253 310.551C726.39 267.345 875.376 319.647 909.858 331.752C1044.4 378.986 1079.66 450.474 1163.83 438.335C1225.41 429.512 1233.06 387.442 1324.32 354.781C1387.86 332.064 1448.12 329.534 1489.58 331.004"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_25"
            d="M-4.30859 312.199C57.3344 331.096 115.002 359.388 165.922 395.718C286.067 482.18 295.051 565.308 351.696 568.996C439.227 574.787 442.21 377.716 607.248 318.791C728.399 275.562 877.385 327.864 911.874 339.987C1046.4 387.202 1081.65 458.695 1165.84 446.57C1227.43 437.747 1235.05 395.682 1326.34 363.035C1389.9 340.294 1450.13 337.769 1491.6 339.258"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_26"
            d="M-2.40527 320.447C59.2377 339.344 116.905 367.636 167.826 403.966C287.971 490.429 296.955 573.557 353.621 577.239C441.182 582.922 444.121 385.922 609.257 327.014C730.388 283.789 879.353 336.035 913.884 348.209C1048.39 395.43 1083.66 466.937 1167.83 454.797C1229.42 445.974 1237.07 403.923 1328.33 371.262C1391.89 348.521 1452.12 345.997 1493.59 347.486"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="Vector_27"
            d="M-0.395386 328.668C61.2443 347.572 118.911 375.864 169.836 412.187C289.987 498.669 298.965 581.778 355.609 585.466C443.192 591.144 446.11 394.148 611.246 335.24C732.398 292.011 881.383 344.313 915.872 356.436C1050.4 403.652 1085.65 475.163 1169.84 463.019C1231.43 454.196 1239.06 412.15 1330.34 379.484C1393.9 356.743 1454.13 354.218 1495.6 355.707"
            stroke="#333"
            strokeOpacity="0.2"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
        </g>
      </svg>
    </div>
  );
}
