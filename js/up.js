const btnUp = {
  el: document.querySelector('.up'),
  show() {
    // удалим у кнопки класс up_hide
    this.el.classList.remove('up_hide');
  },
  hide() {
    // добавим к кнопке класс up_hide
    this.el.classList.add('up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 900 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .up
    document.querySelector('.up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();