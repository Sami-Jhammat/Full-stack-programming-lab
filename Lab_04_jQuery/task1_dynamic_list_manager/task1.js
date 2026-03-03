// Task 1 — Dynamic List Manager
// Features: DOM Manipulation, Event Handling, CSS Manipulation

$(function () {
  const $input = $("#itemText");
  const $list = $("#items");
  const $empty = $("#emptyState");

  function updateEmptyState() {
    $empty.toggle($list.children("li").length === 0);
  }

  function makeItem(text) {
    const safeText = String(text).trim();
    if (!safeText) return null;

    // DOM creation (jQuery)
    const $li = $("<li></li>");
    const $left = $("<div></div>").text(safeText);

    const $del = $("<button></button>")
      .addClass("btn danger")
      .attr("type", "button")
      .text("Delete");

    // Event handling for delete
    $del.on("click", function () {
      $li.slideUp(150, function () {
        $li.remove();
        updateEmptyState();
      });
    });

    // Hover highlight (CSS class manipulation)
    $li.on("mouseenter", () => $li.addClass("hovered"));
    $li.on("mouseleave", () => $li.removeClass("hovered"));

    $li.append($left, $del);
    return $li;
  }

  function addItem() {
    const text = $input.val();
    const $item = makeItem(text);
    if (!$item) {
      $input.focus();
      return;
    }

    $list.prepend($item.hide().slideDown(150));
    $input.val("").focus();
    updateEmptyState();
  }

  $("#addBtn").on("click", addItem);

  $("#clearBtn").on("click", function () {
    if ($list.children("li").length === 0) return;
    if (!confirm("Clear all items?")) return;
    $list.children("li").slideUp(150, function () {
      $(this).remove();
      updateEmptyState();
    });
  });

  // Enter-to-add
  $input.on("keydown", function (e) {
    if (e.key === "Enter") addItem();
  });

  updateEmptyState();
});
