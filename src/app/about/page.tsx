import { Heart, Sparkles, Users, BookOpen, Star, Box } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                        Добре дошла в света на <span style={{ color: "var(--knigarela-pink)" }}>Книгарела</span>
                    </h1>

                    <p className="text-lg text-gray-600 md:text-xl">
                        Щом четеш това, може би съдбата е искала да стигнеш дотук и да откриеш онова приказно време за себе си, което наистина заслужаваш. 
                    </p>

                    <BookOpen className="mx-auto mt-6 h-16 w-16 text-(--knigarela-pink)" aria-hidden="true" />
                </div>
            </section>

            {/* Mission Section */}
            <section className="mx-auto max-w-6xl px-4 py-16 animate-fade-in">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold" style={{ color: "var(--knigarela-pink)" }}>
                            Защо създадохме Книгарела? 
                        </h2>
                        <p className="mb-4 leading-relaxed text-gray-700">
                            Книгарела е създадена от мама на двама и тати, с много любов и внимание към детайла. Идеята се роди в главата ми един ден леко изгубена между две майчинства на деца с малка разлика. Една проста мисъл – не съм сама и всяка жена има нужда от време за себе си.
                        </p>
                        <p className="leading-relaxed text-gray-700">
                            Вярваме, че всяка жена е специална и заслужава онези тихи моменти, в които да се откъсне от забързаното ежедневие и да се потопи в нова история. 
                        </p>
                    </div>
                    <div className="grid gap-6">
                        <div className="flex gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                            <Heart className="h-8 w-8 shrink-0" style={{ color: "var(--knigarela-pink)" }} aria-hidden="true" />
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">Направено с любов</h3>
                                <p className="text-sm text-gray-600">
                                    Всяка кутия е грижливо подготвена с внимание към детайла и истинска любов към книгите
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                            <Box className="h-8 w-8 shrink-0" style={{ color: "var(--knigarela-pink)" }} aria-hidden="true" />
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">В кутията те очаква</h3>
                                <p className="text-sm text-gray-600">
                                    В нашата кутия ще откриеш новоиздадена книга както и допълнителни артикули, създадени с грижа за ума и душата ти.  
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                            <Sparkles className="h-8 w-8 shrink-0" style={{ color: "var(--knigarela-pink)" }} aria-hidden="true" />
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">Приказка за порастнали момичета</h3>
                                <p className="text-sm text-gray-600">
                                    Книгарела не е просто книжна кутия. Тя е покана да си подариш лично време и да се върнеш към себе си. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="px-4 py-16" style={{ backgroundColor: "var(--knigarela-bg)" }}>
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-12 text-center text-3xl font-bold" style={{ color: "var(--knigarela-pink)" }}>
                        Как работи?
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="text-center animate-slide-up">
                            <div className="mb-4 flex justify-center">
                                <div
                                    className="flex h-16 w-16 items-center justify-center rounded-full"
                                    style={{ backgroundColor: "var(--knigarela-pink)", color: "white" }}
                                >
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">Избери кутия</h3>
                            <p className="text-gray-600">
                                Разгледай нашата колекция и избери кутията, която те вълнува най-много
                            </p>
                        </div>
                        <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                            <div className="mb-4 flex justify-center">
                                <div
                                    className="flex h-16 w-16 items-center justify-center rounded-full"
                                    style={{ backgroundColor: "var(--knigarela-pink)", color: "white" }}
                                >
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">Поръчай</h3>
                            <p className="text-gray-600">Избери дали искаш еднократна поръчка или месечен абонамент с отстъпка</p>
                        </div>
                        <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
                            <div className="mb-4 flex justify-center">
                                <div
                                    className="flex h-16 w-16 items-center justify-center rounded-full"
                                    style={{ backgroundColor: "var(--knigarela-pink)", color: "white" }}
                                >
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">Наслади се</h3>
                            <p className="text-gray-600">Получи красива кутия с книгa и започни своето ново приказно пътешествие</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="mx-auto max-w-4xl px-4 py-16 text-center">
                <Users className="mx-auto mb-6 h-16 w-16" style={{ color: "var(--knigarela-pink)" }} aria-hidden="true" />
                <h2 className="mb-4 text-3xl font-bold" style={{ color: "var(--knigarela-pink)" }}>
                    Присъедини се към нашата общност
                </h2>
                <p className="mb-8 leading-relaxed text-gray-700">
                    Книгарела е една приказка за пораснали момичета – време е да изживееш своята!
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <a
                        href="/subscribe"
                        rel="noopener noreferrer"
                        className="rounded-lg px-6 py-3 font-medium text-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        style={{ backgroundColor: "var(--knigarela-pink)" }}
                        aria-label="Абонирай се"
                    >
                        Абонирай се
                    </a>
                    <a
                        href="https://facebook.com/559944393863294"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        style={{ borderColor: "var(--knigarela-pink)", color: "var(--knigarela-pink)" }}
                        aria-label="Посети ни във Facebook"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://instagram.com/kni.ga.rela"
                        target="_blank"
                        rel="noopener noreferrer"
                       className="rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        style={{ borderColor: "var(--knigarela-pink)", color: "var(--knigarela-pink)" }}
                        aria-label="Посети ни в Instagram"
                    >
                        Instagram
                    </a>
                </div>
            </section>
        </div>
    )
}
