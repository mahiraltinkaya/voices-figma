$(document).ready(() => {
  let mobile = false;
  let screenWidth = window.innerWidth;

  let courtBoard =
    screenWidth < 768 ? [...list].filter((item, i) => i < 4) : [...list];

  const truncate = (val) => {
    val = val.toString() || "";

    val = val.split(" ");

    if (val[1]) val[1] = val[1].substring(0, 1) + ".";

    val = val.join(" ");

    return val;
  };
  const updateBoard = () => {
    $("table tbody").text("");
    $(".courts").text("");

    $.each(courtBoard, function (index, value) {
      let listItem = `<tr>
      <td class="d-sm-none">
        <img
          src="/public/assets/icons/racket.svg"
          alt=""
          width="37px"
        />
      </td>
      <td class="d-sm-none">
      ${
        value.hs
          ? '<img src="/public/assets/icons/hs.svg" alt="" width="37px"/>'
          : value.rate
      }
      </td>
      <td class="font-size-xs">
      <div class="d-flex justify-flex-start align-center text-left">${
        value.team[0].name
      }</div>
      <div class="d-flex justify-flex-start align-center text-left ">${
        value.team[1].name ? value.team[1].name : ""
      }</div>
      </td>
      <td class="font-size-xs">
          <div class="d-flex justify-center align-center text-left ">${
            value.team2[0].name
          }</div>
          <div class="d-flex justify-center align-center text-left ">${
            value.team2[1].name ? value.team2[1].name : ""
          }</div>
      </td>
      <td> <span style="font-weight:700;font-size:24px">${
        value.left
      }</span>  mins. 
        <button class="garbage-collector" data-id=${value.id} >
        <img src="/public/assets/icons/rubbish.svg" width="15px" class="d-md-none d-lg-none " />
        </button>
      </td>
    </tr>`;

      let courtItem = `   <div class="court">
      <div class="court-map">
    
      <div class="court__top-side">
      <div>
      ${truncate(value.team[0].name)}</div>
      <div>
      ${truncate(value.team[1].name)}</div>
      </div>
  
        <div
          class="court-info text-center d-flex justify-center align-center"
        >
          12 min.
        </div>
      <div class="court__bot-side">
      <div>
      ${truncate(value.team2[0].name)}</div>
      <div>
      ${truncate(value.team2[1].name)}</div>
      </div>
      </div>
    </div>`;

      $("table tbody").append(listItem);
      $(".courts").append(courtItem);
    });
  };

  updateBoard();

  $(".garbage-collector").on("click", function () {
    let index = $(this).data("id");

    console.log("Get delete item index. " + index);
  });

  window.addEventListener("resize", (e) => {
    if (e.currentTarget.innerWidth < 768) {
      courtBoard = [...courtBoard].filter((item, index) => {
        if (index < 4) {
          return item;
        }
      });
      updateBoard();
    } else {
      cupBoard = [...list];
      updateBoard();
      mobile = false;
    }
  });
});
