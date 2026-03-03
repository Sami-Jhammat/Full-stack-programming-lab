// Task 4 — Tabbed Content with Smooth Scroll
// Features: DOM Manipulation, Effects & Animations, Event Handling

$(function () {
  const $tabs = $(".tab");
  const $panels = $(".panel");

  function activate(targetSelector) {
    const $target = $(targetSelector);
    if ($target.length === 0) return;

    // Switch active tab
    $tabs.removeClass("active")
      .filter(`[data-target="${targetSelector}"]`)
      .addClass("active");

    // Switch panels (animate)
    $panels.not($target).removeClass("active").hide();
    $target
      .addClass("active")
      .hide()
      .fadeIn(180);

    // Smooth scroll to section
    $("html, body").stop(true).animate({
      scrollTop: $target.offset().top - 18
    }, 350);

    // Small pop animation
    $target
      .stop(true)
      .css({ transform: "scale(0.99)" })
      .animate({ dummy: 1 }, {
        duration: 160,
        step: function () { /* no-op */ },
        complete: function () {
          $target.css({ transform: "scale(1)" });
        }
      });
  }

  $tabs.on("click", function () {
    activate($(this).data("target"));
  });
});
