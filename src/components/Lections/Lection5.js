import React from 'react';
import Course from "../Course";
import Header from "../Header/Header";
import "Lection.css";
const Lection5 = () => {
  return (
    <div>
        <Header/>
        <Course/>
        <div className="Lection">
          <h1>Управление малым и средним предприятиями</h1>
          <h3>Планирование</h3>
          <p>Планирование&nbsp;— это деятельность по&nbsp;поддержанию пропорций между затратами, результатами, ресурсами, сроками и&nbsp;исполнителями. Самая большая&nbsp;и, к&nbsp;сожалению, типичная ошибка начинающих предпринимателей&nbsp;— стремление уйти от&nbsp;разработки плана, прикрывшись фразой: «Что можно планировать в&nbsp;этом меняющемся мире?!». Преимущества остаются за&nbsp;тем бизнесом, который планирует (поддерживает пропорции) в&nbsp;своих действиях при различных вариантах развития внешнего окружения. Этот прием называется <em style="font-weight: inherit;">вариантное планирование</em> и&nbsp;заключается в&nbsp;разработке (описании) наихудшего, наилучшего и&nbsp;компромиссного сценариев&nbsp;и, самое главное, собственных действий.</p>
          <p>В&nbsp;учебниках по&nbsp;стратегическому планированию приводятся сложные модели статистического анализа&nbsp;— для их&nbsp;разработки требуются многочисленные исходные данные, пакеты прикладных программ, опыт и&nbsp;искусство профессиональных аналитиков. Отказ предпринимателей от&nbsp;детального планирования&nbsp;— это не&nbsp;только лень и&nbsp;отсутствие времени. Надо реально оценивать соответствие масштабов бизнеса и&nbsp;затрат на&nbsp;разработку планов:</p>
          <ul>
          <li>микропредприятия достигают эффективности за&nbsp;счет доминирования одного преимущества;</li>
          <li>малые предприятия используют взаимосвязь преимуществ в&nbsp;производстве, маркетинге, финансах и&nbsp;персонале;</li>
          <li>средние предприятия реализуют свои преимущества в&nbsp;разных сферах управления за&nbsp;счет преимуществ именно в&nbsp;системе управления;</li>
          <li>крупные предприятия достигают эффективности за&nbsp;счет роста своих масштабов.</li>
          </ul>
          <p>В&nbsp;деятельности крупных предприятий бывают счастливые периоды, когда они добиваются отдельных преимуществ и&nbsp;вынуждены перестраивать, взаимосогласовывать эти преимущества между разными сферами управления, совершенствовать свою систему управления в&nbsp;целом. Группа новаторов, которая занимается всеми этими процессами в&nbsp;корпорации, работает как малый бизнес. Ради таких групп в&nbsp;крупных корпорациях используются разные формы корпоративной поддержки новшеств: делегирование полномочий, управление проектами, работа командой, оплата бонусов по&nbsp;результатам реализации проектов и&nbsp;многие другие. Но&nbsp;сами новаторы в&nbsp;этот период чувствуют себя малыми предпринимателями, которые достигнут эффекта, лишь реализуя свои преимущества.</p>
          <p>Преимущества среднего бизнеса не&nbsp;столь очевидны, как у&nbsp;малых предприятий, и&nbsp;не&nbsp;столь масштабны, как у&nbsp;крупных корпораций. Поэтому средние предприятия должны доказывать свои преимущества более тщательной проработкой своих стратегий, своих бизнес-планов, своих действий по&nbsp;реализации своих преимуществ в&nbsp;управлении производством, маркетингом, финансами и&nbsp;персоналом.</p>
          <p>Промежуточное положение средних предприятий оставляет им&nbsp;только одно главное преимущество&nbsp;— совершенствование системы управления. Средние предприятия используют свои, даже небольшие, преимущества в&nbsp;производстве, маркетинге, финансах и&nbsp;персонале, но&nbsp;мультиплицируют эти небольшие преимущества за&nbsp;счет масштабирования своего бизнеса.</p>		
          <h3>Анализ исходной ситуации</h3>
          <p>Наиболее простой подход заключается в&nbsp;использовании типовых ситуаций, которые можно свести в&nbsp;следующие группы, в&nbsp;зависимости от&nbsp;изменений показателей и&nbsp;трендов. При этом используются показатели:</p>
          <ul>
          <li>Абсолютное значение Хt;</li>
          <li>Абсолютный прирост ΔХt=Хt-Хt-1;</li>
          <li>Темп прироста TP=Xt/Xt-1*;</li>
          <li>Темп прироста ТП=ΔХt/Xt-1;</li>
          <li>Изменение прироста  δt=ΔХt-ΔХt-1</li>
          </ul>
          <p>
          В&nbsp;зависимости от&nbsp;сочетаний и&nbsp;знаков этих показателей можно выделить основные группы тенденций и&nbsp;взаимосвязей, которые представлены на&nbsp;рисунке 4.</p>
          <p><img alt="" src="https://school.centrinvest.ru/ckeditor_assets/pictures/17/content_tendentsii-i-tipy_-retina.png" style="width: 800px; height: 1419px;"/></p>
          <h5>Основные виды&nbsp;тенденций и взаимосвязей</h5>
          <p>&nbsp;</p>
          <p class=".emphasized"><em>На&nbsp;первом этапе по&nbsp;каждому виду продукции и&nbsp;ресурсов определяется сложившаяся тенденция динамики соответствующих показателей. Затем делаются предположения о&nbsp;сохранении или изменении сложившейся тенденции и&nbsp;определяются прогнозные значения показателей.</em></p>
          <p>Сравнение прогнозных значений позволяет оценить взаимосвязи (пропорции) между:
          </p><ul>
          <li>предприятием и&nbsp;внешним окружением;</li>
          <li>элементами, производственной, организационной, функциональной и&nbsp;продуктовой структурами бизнеса;</li>
          <li>затратами ресурсов и&nbsp;результатами бизнес-деятельности.</li>
          </ul>
          <p>Не&nbsp;надо думать, что вся эта аналитическая работа для предпринимателя играет роль дополнительной нагрузки. Наоборот, вместо фрагментарного анализа отдельных пропорций, возникающих в&nbsp;сновидениях и&nbsp;ночных кошмарах, постоянного страха упустить что-то главное в&nbsp;завтрашнем дне планирующий предприниматель получает преимущество: он&nbsp;заранее, спокойно и&nbsp;уверенно выявляет не&nbsp;только ожидающие его трудности, но&nbsp;и&nbsp;пути их&nbsp;преодоления.</p>
          <p>Еще один комплекс, от&nbsp;которого следует избавиться предпринимателю при разработке плана: если анализ тенденций и&nbsp;пропорций не&nbsp;дал желаемого результата, то&nbsp;надо изменить исходные предпосылки и&nbsp;попробовать еще раз. Многократное повторение (итерации) расчетов&nbsp;— не&nbsp;бессмысленное времяпровождение: с&nbsp;каждой итерацией предприниматель глубже понимает реальные процессы, влияющие на&nbsp;его бизнес, и&nbsp;постепенно приближается к&nbsp;более точному выявлению своих преимуществ на&nbsp;рынке.</p>
          <h3>Стратегическое решение</h3>
          <p>Конечным результатом планово-аналитической работы предпринимателя является принятие одного из&nbsp;следующих стратегических решений: продажа бизнеса или захват новых рынков. У&nbsp;среднего бизнеса есть еще один вариант&nbsp;— сохранение своих позиций на&nbsp;рынке, но&nbsp;он&nbsp;таит опасность полного и&nbsp;незаметного исчезновения с&nbsp;рынка в&nbsp;недалекой перспективе. Так, что даже не&nbsp;удастся продать бизнес.</p>
          <h5>Таблица 6. Выбор стратегии развития</h5>
          <table cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th>Стратегия развития</th>
                <th>Критерии выбора</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Продажа бизнеса</td>
                <td>Целесообразна, если предполагаемая цена покупки превышает предполагаемый доход за три года работы на рынке</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Захват новых сегментов отечественного рынка</td>
                <td>Стратегия оправданна, если приведённый доход (с учётом затрат по захвату рынка) за три года остаётся положительной величиной</td>
              </tr>
              <tr>
                <td>Выход на внешний рынок</td>
                <td>Стратегия оправданна, если приведённый доход за три года, рассчитанный в валюте, имеет положительное значение</td>
              </tr>
            </tbody>
          </table>
          <p>В&nbsp;зависимости от&nbsp;структуры собственности и&nbsp;легальности бизнеса доход может включать разные составляющие: чистая прибыль, прибыль + амортизация, прибыль + зарплата, учтенный доход + «неучтенный нал».</p>
          <p>Продажа бизнеса&nbsp;— отнюдь не&nbsp;повод для огорчений. Во-первых, это общественное признание заслуг в&nbsp;создании бизнеса, его эффективности и&nbsp;привлекательности. Во-вторых, продажа одного бизнеса дает денежные средства для начала нового дела. Наконец, честное признание самому себе, что старые преимущества исчерпали себя, снижает риски безвестного и&nbsp;мучительного исчезновения с&nbsp;рынка.</p>
        </div>
    </div>
  );
};
export default Lection5;