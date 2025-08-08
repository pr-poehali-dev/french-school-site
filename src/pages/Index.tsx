import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const courses = [
    {
      title: "Французский для начинающих",
      description: "Изучите основы французского языка с нуля за 3 месяца",
      level: "A1-A2",
      duration: "12 недель",
      price: "15 000 ₽",
      features: ["Алфавит и произношение", "Базовая грамматика", "500+ слов", "Простые диалоги"]
    },
    {
      title: "Разговорный французский",
      description: "Развитие навыков устной речи и понимания на слух",
      level: "B1",
      duration: "16 недель",
      price: "18 000 ₽",
      features: ["Живое общение", "Французские фильмы", "Дебаты и дискуссии", "Культура Франции"]
    },
    {
      title: "Деловой французский",
      description: "Профессиональный французский для карьеры",
      level: "B2+",
      duration: "20 недель", 
      price: "22 000 ₽",
      features: ["Деловая переписка", "Презентации", "Переговоры", "Сертификат"]
    }
  ];

  const teachers = [
    {
      name: "Мари Дюбуа",
      specialty: "Носитель языка из Парижа",
      experience: "8 лет преподавания",
      image: "/img/95da9c2d-3496-4407-974f-64516098c0cc.jpg"
    },
    {
      name: "Анна Петрова",
      specialty: "Специалист по грамматике",
      experience: "12 лет опыта",
      image: "/img/569e19be-e676-456a-880d-d3722686e479.jpg"
    }
  ];

  const reviews = [
    {
      name: "Елена К.",
      text: "Отличная школа! За полгода научилась свободно говорить по-французски. Преподаватели очень профессиональные.",
      rating: 5
    },
    {
      name: "Михаил Р.",
      text: "Благодаря курсам получил работу в французской компании. Рекомендую всем!",
      rating: 5
    },
    {
      name: "Ольга С.",
      text: "Замечательная атмосфера, интересные уроки. Французский стал моим любимым языком!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-red-50/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Fr</span>
              </div>
              <h1 className="font-heading text-xl font-bold text-accent">École Française</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#courses" className="text-gray-600 hover:text-primary transition-colors">Курсы</a>
              <a href="#teachers" className="text-gray-600 hover:text-primary transition-colors">Преподаватели</a>
              <a href="#schedule" className="text-gray-600 hover:text-primary transition-colors">Расписание</a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-accent mb-6 leading-tight">
              Изучите
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> французский</span>
              <br />с нуля
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Современные методики обучения, опытные преподаватели и дружелюбная атмосфера. 
              Начните говорить по-французски уже через месяц!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Начать обучение
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Пробный урок
                <Icon name="Play" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-accent mb-4">Наши курсы</h2>
            <p className="text-xl text-gray-600">Выберите программу, которая подходит именно вам</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-secondary to-secondary/80 text-white">
                      {course.level}
                    </Badge>
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                  <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {course.duration}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20 bg-gradient-to-br from-blue-50/50 to-red-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-accent mb-4">Наши преподаватели</h2>
            <p className="text-xl text-gray-600">Опытные педагоги с глубоким знанием французского языка и культуры</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teachers.map((teacher, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-heading text-2xl font-bold text-accent mb-2">{teacher.name}</h3>
                <p className="text-primary font-semibold mb-1">{teacher.specialty}</p>
                <p className="text-gray-600">{teacher.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-accent mb-4">Расписание</h2>
            <p className="text-xl text-gray-600">Удобное время для занятий</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="Sun" className="text-white" size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-accent mb-2">Утренние группы</h3>
                    <p className="text-gray-600 mb-4">9:00 - 11:00</p>
                    <p className="text-sm text-gray-500">Понедельник, среда, пятница</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="Sunset" className="text-white" size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-accent mb-2">Вечерние группы</h3>
                    <p className="text-gray-600 mb-4">19:00 - 21:00</p>
                    <p className="text-sm text-gray-500">Вторник, четверг</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="Calendar" className="text-white" size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-accent mb-2">Выходные</h3>
                    <p className="text-gray-600 mb-4">10:00 - 13:00</p>
                    <p className="text-sm text-gray-500">Суббота, воскресенье</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-red-50/30 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-accent mb-4">Отзывы учеников</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши студенты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, starIndex) => (
                      <Icon key={starIndex} name="Star" className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-accent">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-accent mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для записи на курсы</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-heading text-2xl font-bold text-accent mb-6">Наш адрес</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <p className="text-gray-600">г. Москва, ул. Тверская, д. 15</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={24} />
                    <p className="text-gray-600">info@ecole-francaise.ru</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="text-primary" size={24} />
                    <p className="text-gray-600">Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-18:00</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading">Записаться на пробный урок</CardTitle>
                  <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-3">
                    Записаться на урок
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Fr</span>
              </div>
              <h3 className="font-heading text-2xl font-bold">École Française</h3>
            </div>
            <p className="text-gray-300 mb-6">Французский язык с удовольствием</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Icon name="Phone" size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-600">
              <p className="text-gray-400 text-sm">© 2024 École Française. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}