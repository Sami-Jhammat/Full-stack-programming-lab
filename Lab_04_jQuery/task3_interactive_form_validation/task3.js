// Task 3 — Interactive Form Validation
// Features: Event Handling, CSS Manipulation, DOM Manipulation

$(function () {
  const $form = $("#signupForm");
  const $success = $("#successBox");

  function setState($input, ok, $err, $ok) {
    $input.removeClass("input-error input-ok");
    $err.hide(); $ok.hide();

    if (ok) {
      $input.addClass("input-ok");
      $ok.fadeIn(120);
    } else {
      $input.addClass("input-error");
      $err.fadeIn(120);
    }
  }

  function validName() {
    const $i = $("#name");
    const ok = $i.val().trim().length >= 3;
    setState($i, ok, $("#nameErr"), $("#nameOk"));
    return ok;
  }

  function validEmail() {
    const $i = $("#email");
    const v = $i.val().trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    setState($i, ok, $("#emailErr"), $("#emailOk"));
    return ok;
  }

  function validPass() {
    const $i = $("#password");
    const ok = $i.val().length >= 6;
    setState($i, ok, $("#passErr"), $("#passOk"));
    return ok;
  }

  function validConfirm() {
    const $i = $("#confirm");
    const ok = $i.val() === $("#password").val() && $i.val().length > 0;
    setState($i, ok, $("#confirmErr"), $("#confirmOk"));
    return ok;
  }

  // Custom event triggered from inline HTML onblur attributes
  $("#name").on("customValidate blur", validName);
  $("#email").on("customValidate blur", validEmail);
  $("#password").on("customValidate blur", function () {
    const ok = validPass();
    // also re-check confirm if password changed
    if ($("#confirm").val().length) validConfirm();
    return ok;
  });
  $("#confirm").on("customValidate blur", validConfirm);

  function validateAll() {
    const ok = validName() & validEmail() & validPass() & validConfirm(); // bitwise ensures all run
    return !!ok;
  }

  $("#submitBtn").on("click", function () {
    $success.hide();
    if (validateAll()) {
      $success.slideDown(160);
      // optional: clear sensitive fields
      $("#password, #confirm").val("");
    } else {
      $success.hide();
    }
  });

  $("#resetBtn").on("click", function () {
    $form[0].reset();
    $success.hide();
    $("input").removeClass("input-error input-ok");
    $(".err, .ok").hide();
  });
});
