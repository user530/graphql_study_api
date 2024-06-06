import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    await prisma.studyField.createMany({
        data: [
            {
                id: 1,
                name: "Управление",
                description: "Программы разработаны для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности",
                copyToKk: true,
                slug: "upravlenie",
                locale: "ru",
                published_at: new Date("2022-07-01T08:46:28.939Z"),
                created_at: new Date("2022-07-01T08:46:04.184Z"),
                updated_at: new Date("2023-11-10T07:30:43.295Z"),
            },
            {
                id: 2,
                name: "Управление персоналом",
                description: "Программы разработаны для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности",
                copyToKk: true,
                slug: "personnel-management",
                locale: "ru",
                published_at: new Date("2021-09-07T16:27:27.243Z"),
                created_at: new Date("2021-09-07T16:27:22.701Z"),
                updated_at: new Date("2021-11-26T16:53:50.424Z"),
            },
            {
                id: 3,
                name: "Инвестиции",
                description: "Программы обучения Инвестиции представляют собой специализированные курсы, которые предназначены для освоения навыков и знаний в области финансовых инвестиций с целью помочь людям принимать обоснованные решения и достигать финансовых целей.",
                copyToKk: true,
                slug: "Investicii",
                locale: "ru",
                published_at: new Date("2023-11-13T06:35:43.646Z"),
                created_at: new Date("2023-11-13T06:35:40.814Z"),
                updated_at: new Date("2023-11-13T06:35:43.663Z"),
            },
            {
                id: 4,
                name: "Юриспруденция",
                description: "Программы разработаны для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности",
                copyToKk: true,
                slug: "jurisprudence",
                locale: "ru",
                published_at: new Date("2021-09-07T16:29:46.104Z"),
                created_at: new Date("2021-09-07T16:29:39.598Z"),
                updated_at: new Date("2021-11-26T16:54:12.965Z"),
            },
            {
                id: 5,
                name: "Безопасность бизнеса",
                description: "Программы обучения по безопасности бизнеса помогают учащимся разработать планы и политику безопасности, обучить сотрудников правилам безопасности и применять эффективные меры по защите информации, материальных и имущественных ценностей бизнеса",
                copyToKk: true,
                slug: "bezopasnost-biznesa",
                locale: "ru",
                published_at: new Date("2023-10-30T13:57:30.695Z"),
                created_at: new Date("2023-10-30T13:57:27.278Z"),
                updated_at: new Date("2023-10-30T13:57:30.705Z"),
            },
            {
                id: 6,
                name: "Финансы",
                description: "Программы обучения по финансам предоставляют теоретическую базу и практические инструменты для эффективного планирования бюджета, инвестирования, управления долгами, налогового планирования и других аспектов финансовых вопросов.",
                copyToKk: true,
                slug: "Finansy",
                locale: "ru",
                published_at: new Date("2023-10-30T14:17:10.119Z"),
                created_at: new Date("2023-10-30T14:17:06.898Z"),
                updated_at: new Date("2023-10-30T14:17:10.129Z"),
            },
            {
                id: 7,
                name: "Бухгалтерия",
                description: "Программы разработаны для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности",
                copyToKk: true,
                slug: " accounting-analysis-and-audit",
                locale: "ru",
                published_at: new Date("2021-09-07T16:25:00.911Z"),
                created_at: new Date("2021-09-07T16:24:54.959Z"),
                updated_at: new Date("2024-05-14T13:50:48.725Z"),
            },
            {
                id: 8,
                name: "Маркетинг",
                description: "Программы обучения по маркетингу помогают развить навыки и знания, необходимые для эффективного продвижения продуктов или услуг на рынке. Они позволяют учащимся изучить основные принципы маркетинга, стратегии рыночного анализа и социальные медиа-инструменты для создания успешной маркетинговой кампании.",
                copyToKk: true,
                slug: "marketing",
                locale: "ru",
                published_at: new Date("2023-10-30T13:54:24.233Z"),
                created_at: new Date("2023-10-30T13:54:01.020Z"),
                updated_at: new Date("2023-10-30T13:54:24.246Z"),
            },
            {
                id: 9,
                name: "Логистика",
                description: "Программы обучения по логистике предназначены для развития компетенций и знаний в области управления и оптимизации цепей поставок. Они включают в себя изучение основных принципов и методов логистики, а также приобретение навыков в планировании, контроле и оптимизации движения товаров и информации от источника до потребителя.",
                copyToKk: true,
                slug: "logistika",
                locale: "ru",
                published_at: new Date("2023-11-08T12:53:57.098Z"),
                created_at: new Date("2023-11-08T12:51:30.339Z"),
                updated_at: new Date("2023-11-08T12:53:57.109Z"),
            },
            {
                id: 10,
                name: "IT",
                description: "Программы обучения в области IT разработаны для подготовки специалистов, способных эффективно работать в динамичной и постоянно меняющейся сфере информационных технологий. Они предоставляют студентам необходимые знания и навыки в области программирования, анализа данных, сетевых технологий и других ключевых областей IT.",
                copyToKk: true,
                slug: "IT",
                locale: "ru",
                published_at: new Date("2023-11-15T09:43:19.684Z"),
                created_at: new Date("2023-11-15T09:43:15.499Z"),
                updated_at: new Date("2023-11-15T09:43:19.692Z"),
            },
            {
                id: 11,
                name: "Аналитика",
                description: "Программы обучения по аналитике предназначены для развития навыков сбора, обработки и анализа данных. Они помогают студентам и профессионалам улучшить свою способность работать с большими объемами информации.",
                copyToKk: true,
                slug: "analitika",
                locale: "ru",
                published_at: new Date("2023-10-30T13:58:48.309Z"),
                created_at: new Date("2023-10-30T13:58:46.516Z"),
                updated_at: new Date("2023-10-30T13:58:48.321Z"),
            },
            {
                id: 12,
                name: "Продажи",
                description: "Программа профессиональной переподготовки разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности.",
                copyToKk: true,
                slug: "sales",
                locale: "ru",
                published_at: new Date("2021-11-25T15:00:51.904Z"),
                created_at: new Date("2021-11-25T15:00:48.036Z"),
                updated_at: new Date("2021-11-26T16:53:21.174Z"),
            },
            {
                id: 13,
                name: "Недвижимость",
                description: "Программы разработаны для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности",
                copyToKk: true,
                slug: "nedvizimost",
                locale: "ru",
                published_at: new Date("2022-06-07T16:03:48.102Z"),
                created_at: new Date("2022-06-07T15:55:58.792Z"),
                updated_at: new Date("2022-06-07T16:03:48.259Z"),
            }
        ]
    });

    await prisma.labelCase.createMany({
        data: [
            {
                id: 1,
                singular: "Mini MBA",
                plural: "Mini MBA"
            },
            {
                id: 2,
                singular: "Executive MBA",
                plural: "Executive MBA"
            },
            {
                id: 3,
                singular: "Профессия",
                plural: "Профессии"
            },
            {
                id: 4,
                singular: "Курс",
                plural: "Курсы"
            },
            {
                id: 5,
                singular: "MBA",
                plural: "MBA"
            },
        ]
    });

    await prisma.category.createMany({
        data: [
            {
                type: "mini",
                slug: "mini",
                copyToKk: true,
                description: "Программа является усеченной версией полуторогодового курса MBA. На курсе Mini MBA Вы сможете повысить свою квалификацию более интенсивно и освоите только ключевые модули длинной программы",
                locale: "ru",
                published_at: "2021-09-14T09:58:41.402Z",
                created_at: "2021-09-14T09:58:04.919Z",
                updated_at: "2021-09-14T09:58:41.593Z",
                labelCasesId: 1,
            },
            {
                type: "executive",
                slug: "executive",
                copyToKk: true,
                description: "Программа Executive MBA разработана для амбициозных предпринимателей и топ-менеджеров крупных компаний, которые привыкли быть лучшими и не готовы останавливаться на достигнутом\n\nКурс, объединивший лучшие отечественные бизнес-практики с глобальным мировым опытом, поможет Вам совершить настоящий прорыв в управлении компанией. Вы построите пошаговую стратегию развития, которая позволит взглянуть на бизнес по-новому",
                locale: "ru",
                published_at: "2021-09-14T09:57:16.807Z",
                created_at: "2021-09-14T09:57:09.321Z",
                updated_at: "2021-09-14T09:57:16.993Z",
                labelCasesId: 2,
            },
            {
                type: "profession",
                slug: "profession",
                copyToKk: true,
                description: "Короткие программы, чтобы изучить один конкретный навык",
                locale: "ru",
                published_at: "2021-09-14T09:56:45.727Z",
                created_at: "2021-09-14T09:56:40.099Z",
                updated_at: "2022-08-09T10:58:40.435Z",
                labelCasesId: 3,
            },
            {
                type: "course",
                slug: "course",
                copyToKk: true,
                description: "Тест курс описание",
                locale: "ru",
                published_at: "2021-11-16T11:28:59.344Z",
                created_at: "2021-11-16T11:28:51.913Z",
                updated_at: "2022-08-09T10:57:36.333Z",
                labelCasesId: 4,
            },
            {
                type: "mba",
                slug: "mba",
                copyToKk: true,
                description: "престижная программа высокого уровня, на которой Вы углубленно изучите менеджмент, маркетинг, финансы, получите востребованные soft skills и расширите карьерные возможности",
                locale: "ru",
                published_at: "2021-09-14T09:59:15.342Z",
                created_at: "2021-09-14T09:59:09.877Z",
                updated_at: "2021-09-14T09:59:15.539Z",
                labelCasesId: 5,
            },
        ]
    })
}
