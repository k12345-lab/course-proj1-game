/* Reusable quiz widget.
   Multiple choice:
     <div class="quiz" data-answer="1" data-explain-0="..." data-explain-1="...">
       <p class="q">Question</p> <button class="opt">A</button> <button class="opt">B</button> </div>
   data-answer = zero-based index of the correct option. data-explain-N = feedback shown when option N is picked.
   Free recall:
     <div class="quiz recall"><p class="q">Prompt</p><textarea></textarea><div class="model" hidden>Model answer</div></div>
   A score line is written into any element with class "score". */
(function () {
  function init() {
    var quizzes = document.querySelectorAll('.quiz:not(.recall)');
    var answered = 0, correct = 0, total = quizzes.length;
    var scoreEls = document.querySelectorAll('.score');
    function renderScore() {
      scoreEls.forEach(function (s) { s.textContent = 'Score: ' + correct + ' / ' + answered + ' answered (of ' + total + ')'; });
    }
    quizzes.forEach(function (quiz) {
      var ans = parseInt(quiz.dataset.answer, 10);
      var opts = quiz.querySelectorAll('button.opt');
      var fb = document.createElement('div'); fb.className = 'fb'; quiz.appendChild(fb);
      opts.forEach(function (btn, i) {
        btn.type = 'button';
        btn.addEventListener('click', function () {
          opts.forEach(function (b) { b.disabled = true; });
          opts[ans].classList.add('correct');
          var ok = i === ans;
          if (!ok) btn.classList.add('wrong');
          answered++; if (ok) correct++;
          var explain = quiz.getAttribute('data-explain-' + i) || quiz.dataset.explain || '';
          fb.innerHTML = '<strong>' + (ok ? 'Correct.' : 'Not quite.') + '</strong> ' + explain;
          renderScore();
        });
      });
    });
    document.querySelectorAll('.quiz.recall').forEach(function (quiz) {
      var model = quiz.querySelector('.model');
      var btn = document.createElement('button');
      btn.className = 'reveal'; btn.type = 'button'; btn.textContent = 'Compare with model answer';
      btn.addEventListener('click', function () { model.hidden = false; btn.hidden = true; });
      quiz.appendChild(btn);
    });
    renderScore();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
