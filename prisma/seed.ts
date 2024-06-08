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
    });

    await prisma.picture.createMany({
        data: [
            {
                id: 1,
                name: "bg-header-11.jpg",
                alternativeText: "",
                caption: "",
                width: 1920,
                height: 1158,
                formats: {
                    large: {
                        "ext": ".jpg",
                        "url": "https://res.cloudinary.com/npomba/image/upload/v1631637541/large_bg_header_11_1b039a2d94.jpg",
                        "hash": "large_bg_header_11_1b039a2d94",
                        "mime": "image/jpeg",
                        "name": "large_bg-header-11.jpg",
                        "path": null,
                        "size": 118.44,
                        "width": 1000,
                        "height": 603,
                        "provider_metadata": {
                            "public_id": "large_bg_header_11_1b039a2d94",
                            "resource_type": "image"
                        }
                    },
                    small: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637543/small_bg_header_11_1b039a2d94.jpg",
                        hash: "small_bg_header_11_1b039a2d94",
                        mime: "image/jpeg",
                        name: "small_bg-header-11.jpg",
                        path: null,
                        size: 36.33,
                        width: 500,
                        height: 302,
                        provider_metadata: {
                            public_id: "small_bg_header_11_1b039a2d94",
                            resource_type: "image"
                        }
                    },
                    medium: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637542/medium_bg_header_11_1b039a2d94.jpg",
                        hash: "medium_bg_header_11_1b039a2d94",
                        mime: "image/jpeg",
                        name: "medium_bg-header-11.jpg",
                        path: null,
                        size: 71.48,
                        width: 750,
                        height: 452,
                        provider_metadata: {
                            public_id: "medium_bg_header_11_1b039a2d94",
                            resource_type: "image"
                        }
                    },
                    thumbnail: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637540/thumbnail_bg_header_11_1b039a2d94.jpg",
                        hash: "thumbnail_bg_header_11_1b039a2d94",
                        mime: "image/jpeg",
                        name: "thumbnail_bg-header-11.jpg",
                        path: null,
                        size: 10.99,
                        width: 245,
                        height: 148,
                        provider_metadata: {
                            public_id: "thumbnail_bg_header_11_1b039a2d94",
                            resource_type: "image"
                        }
                    }
                },
                hash: "bg_header_11_1b039a2d94",
                ext: ".jpg",
                mime: "image/jpeg",
                size: 232.37,
                url: "https://res.cloudinary.com/npomba/image/upload/v1631637539/bg_header_11_1b039a2d94.jpg",
                previewUrl: null,
                provider: "cloudinary",
                provider_metadata: {
                    public_id: "bg_header_11_1b039a2d94",
                    resource_type: "image"
                },
                created_at: new Date("2021-09-14T16:39:03.771Z"),
                updated_at: new Date("2021-10-20T07:22:42.557Z"),
            },
            {
                id: 2,
                name: "bg-header-4.jpg",
                alternativeText: "",
                caption: "",
                width: 1920,
                height: 1156,
                formats: {
                    large: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637524/large_bg_header_4_e11335d6ec.jpg",
                        hash: "large_bg_header_4_e11335d6ec",
                        mime: "image/jpeg",
                        name: "large_bg-header-4.jpg",
                        path: null,
                        size: 86.08,
                        width: 1000,
                        height: 602,
                        provider_metadata: {
                            public_id: "large_bg_header_4_e11335d6ec",
                            resource_type: "image"
                        }
                    },
                    small: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637527/small_bg_header_4_e11335d6ec.jpg",
                        hash: "small_bg_header_4_e11335d6ec",
                        mime: "image/jpeg",
                        name: "small_bg-header-4.jpg",
                        path: null,
                        size: 27.04,
                        width: 500,
                        height: 301,
                        provider_metadata: {
                            public_id: "small_bg_header_4_e11335d6ec",
                            resource_type: "image"
                        }
                    },
                    medium: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637525/medium_bg_header_4_e11335d6ec.jpg",
                        hash: "medium_bg_header_4_e11335d6ec",
                        mime: "image/jpeg",
                        name: "medium_bg-header-4.jpg",
                        path: null,
                        size: 51.92,
                        width: 750,
                        height: 452,
                        provider_metadata: {
                            public_id: "medium_bg_header_4_e11335d6ec",
                            resource_type: "image"
                        }
                    },
                    thumbnail: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637523/thumbnail_bg_header_4_e11335d6ec.jpg",
                        hash: "thumbnail_bg_header_4_e11335d6ec",
                        mime: "image/jpeg",
                        name: "thumbnail_bg-header-4.jpg",
                        path: null,
                        size: 8.84,
                        width: 245,
                        height: 148,
                        provider_metadata: {
                            public_id: "thumbnail_bg_header_4_e11335d6ec",
                            resource_type: "image"
                        }
                    }
                },
                hash: "bg_header_4_e11335d6ec",
                ext: ".jpg",
                mime: "image/jpeg",
                size: 233.82,
                url: "https://res.cloudinary.com/npomba/image/upload/v1631637522/bg_header_4_e11335d6ec.jpg",
                previewUrl: null,
                provider: "cloudinary",
                provider_metadata: {
                    public_id: "bg_header_4_e11335d6ec",
                    resource_type: "image"
                },
                created_at: new Date("2021-09-14T16:38:47.424Z"),
                updated_at: new Date("2021-10-20T08:01:57.638Z"),
            },
            {
                id: 3,
                name: "bg-header-2.jpg",
                alternativeText: "",
                caption: "",
                width: 1920,
                height: 1057,
                formats: {
                    large: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637525/large_bg_header_2_501dc41a98.jpg",
                        hash: "large_bg_header_2_501dc41a98",
                        mime: "image/jpeg",
                        name: "large_bg-header-2.jpg",
                        path: null,
                        size: 165.58,
                        width: 1000,
                        height: 551,
                        provider_metadata: {
                            public_id: "large_bg_header_2_501dc41a98",
                            resource_type: "image"
                        }
                    },
                    small: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637529/small_bg_header_2_501dc41a98.jpg",
                        hash: "small_bg_header_2_501dc41a98",
                        mime: "image/jpeg",
                        name: "small_bg-header-2.jpg",
                        path: null,
                        size: 50.57,
                        width: 500,
                        height: 275,
                        provider_metadata: {
                            public_id: "small_bg_header_2_501dc41a98",
                            resource_type: "image"
                        }
                    },
                    medium: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637527/medium_bg_header_2_501dc41a98.jpg",
                        hash: "medium_bg_header_2_501dc41a98",
                        mime: "image/jpeg",
                        name: "medium_bg-header-2.jpg",
                        path: null,
                        size: 99.61,
                        width: 750,
                        height: 413,
                        provider_metadata: {
                            public_id: "medium_bg_header_2_501dc41a98",
                            resource_type: "image"
                        }
                    },
                    thumbnail: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637524/thumbnail_bg_header_2_501dc41a98.jpg",
                        hash: "thumbnail_bg_header_2_501dc41a98",
                        mime: "image/jpeg",
                        name: "thumbnail_bg-header-2.jpg",
                        path: null,
                        size: 14.12,
                        width: 245,
                        height: 135,
                        provider_metadata: {
                            public_id: "thumbnail_bg_header_2_501dc41a98",
                            resource_type: "image"
                        }
                    }
                },
                hash: "bg_header_2_501dc41a98",
                ext: ".jpg",
                mime: "image/jpeg",
                size: 396.54,
                url: "https://res.cloudinary.com/npomba/image/upload/v1631637523/bg_header_2_501dc41a98.jpg",
                previewUrl: null,
                provider: "cloudinary",
                provider_metadata: {
                    public_id: "bg_header_2_501dc41a98",
                    resource_type: "image"
                },
                created_at: new Date("2021-09-14T16:38:49.336Z"),
                updated_at: new Date("2021-10-20T07:00:02.956Z"),
            },
            {
                id: 4,
                name: "bg-header-5.jpg",
                alternativeText: "",
                caption: "",
                width: 1920,
                height: 1280,
                formats: {
                    large: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637536/large_bg_header_5_5139d89af8.jpg",
                        hash: "large_bg_header_5_5139d89af8",
                        mime: "image/jpeg",
                        name: "large_bg-header-5.jpg",
                        path: null,
                        size: 197.76,
                        width: 1000,
                        height: 667,
                        provider_metadata: {
                            public_id: "large_bg_header_5_5139d89af8",
                            resource_type: "image"
                        }
                    },
                    small: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637538/small_bg_header_5_5139d89af8.jpg",
                        hash: "small_bg_header_5_5139d89af8",
                        mime: "image/jpeg",
                        name: "small_bg-header-5.jpg",
                        path: null,
                        size: 61.71,
                        width: 500,
                        height: 333,
                        provider_metadata: {
                            public_id: "small_bg_header_5_5139d89af8",
                            resource_type: "image"
                        }
                    },
                    medium: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637537/medium_bg_header_5_5139d89af8.jpg",
                        hash: "medium_bg_header_5_5139d89af8",
                        mime: "image/jpeg",
                        name: "medium_bg-header-5.jpg",
                        path: null,
                        size: 120.93,
                        width: 750,
                        height: 500,
                        provider_metadata: {
                            public_id: "medium_bg_header_5_5139d89af8",
                            resource_type: "image"
                        }
                    },
                    thumbnail: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637535/thumbnail_bg_header_5_5139d89af8.jpg",
                        hash: "thumbnail_bg_header_5_5139d89af8",
                        mime: "image/jpeg",
                        name: "thumbnail_bg-header-5.jpg",
                        path: null,
                        size: 15.93,
                        width: 234,
                        height: 156,
                        provider_metadata: {
                            public_id: "thumbnail_bg_header_5_5139d89af8",
                            resource_type: "image"
                        }
                    }
                },
                hash: "bg_header_5_5139d89af8",
                ext: ".jpg",
                mime: "image/jpeg",
                size: 373.02,
                url: "https://res.cloudinary.com/npomba/image/upload/v1631637534/bg_header_5_5139d89af8.jpg",
                previewUrl: null,
                provider: "cloudinary",
                provider_metadata: {
                    public_id: "bg_header_5_5139d89af8",
                    resource_type: "image"
                },
                created_at: new Date("2021-09-14T16:38:59.114Z"),
                updated_at: new Date("2021-11-26T10:37:38.194Z")
            },
            {
                id: 5,
                name: "bg-header-11.jpg",
                alternativeText: "",
                caption: "",
                width: 1920,
                height: 1158,
                formats: {
                    large: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637541/large_bg_header_11_1b039a2d94.jpg",
                        hash: "large_bg_header_11_1b039a2d94",
                        mime: "image/jpeg",
                        name: "large_bg-header-11.jpg",
                        path: null,
                        size: 118.44,
                        width: 1000,
                        height: 603,
                        provider_metadata: {
                            public_id: "large_bg_header_11_1b039a2d94",
                            resource_type: "image"
                        }
                    },
                    small: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637543/small_bg_header_11_1b039a2d94.jpg",
                        hash: "small_bg_header_11_1b039a2d94",
                        mime: "image/jpeg",
                        name: "small_bg-header-11.jpg",
                        path: null,
                        size: 36.33,
                        width: 500,
                        height: 302,
                        provider_metadata: {
                            public_id: "small_bg_header_11_1b039a2d94",
                            resource_type: "image"
                        }
                    },
                    medium: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637542/medium_bg_header_11_1b039a2d94.jpg",
                        hash: "medium_bg_header_11_1b039a2d94",
                        mime: "image/jpeg",
                        name: "medium_bg-header-11.jpg",
                        path: null,
                        size: 71.48,
                        width: 750,
                        height: 452,
                        provider_metadata: {
                            public_id: "medium_bg_header_11_1b039a2d94",
                            resource_type: "image"
                        }
                    },
                    thumbnail: {
                        ext: ".jpg",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1631637540/thumbnail_bg_header_11_1b039a2d94.jpg",
                        hash: "thumbnail_bg_header_11_1b039a2d94",
                        mime: "image/jpeg",
                        name: "thumbnail_bg-header-11.jpg",
                        path: null,
                        size: 10.99,
                        width: 245,
                        height: 148,
                        provider_metadata: {
                            public_id: "thumbnail_bg_header_11_1b039a2d94",
                            resource_type: "image"
                        }
                    }
                },
                hash: "bg_header_11_1b039a2d94",
                ext: ".jpg",
                mime: "image/jpeg",
                size: 232.37,
                url: "https://res.cloudinary.com/npomba/image/upload/v1631637539/bg_header_11_1b039a2d94.jpg",
                previewUrl: null,
                provider: "cloudinary",
                provider_metadata: {
                    public_id: "bg_header_11_1b039a2d94",
                    resource_type: "image"
                },
                created_at: new Date("2021-09-14T16:39:03.771Z"),
                updated_at: new Date("2021-10-20T07:22:42.557Z")
            },
            {
                id: 6,
                name: "строй.png",
                alternativeText: "",
                caption: "",
                width: 891,
                height: 586,
                formats: {
                    small: {
                        ext: ".png",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1697787350/small_stroj_546b71dd25.png",
                        hash: "small_stroj_546b71dd25",
                        mime: "image/png",
                        name: "small_строй.png",
                        path: null,
                        size: 347.38,
                        width: 500,
                        height: 329,
                        provider_metadata: {
                            public_id: "small_stroj_546b71dd25",
                            resource_type: "image"
                        }
                    },
                    medium: {
                        ext: ".png",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1697787348/medium_stroj_546b71dd25.png",
                        hash: "medium_stroj_546b71dd25",
                        mime: "image/png",
                        name: "medium_строй.png",
                        path: null,
                        size: 731.11,
                        width: 750,
                        height: 493,
                        provider_metadata: {
                            public_id: "medium_stroj_546b71dd25",
                            resource_type: "image"
                        }
                    },
                    thumbnail: {
                        ext: ".png",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1697787346/thumbnail_stroj_546b71dd25.png",
                        hash: "thumbnail_stroj_546b71dd25",
                        mime: "image/png",
                        name: "thumbnail_строй.png",
                        path: null,
                        size: 87.13,
                        width: 237,
                        height: 156,
                        provider_metadata: {
                            public_id: "thumbnail_stroj_546b71dd25",
                            resource_type: "image"
                        }
                    }
                },
                hash: "stroj_546b71dd25",
                ext: ".png",
                mime: "image/png",
                size: 932.85,
                url: "https://res.cloudinary.com/npomba/image/upload/v1697787345/stroj_546b71dd25.png",
                previewUrl: null,
                provider: "cloudinary",
                provider_metadata: {
                    public_id: "stroj_546b71dd25",
                    resource_type: "image"
                },
                created_at: new Date("2023-10-20T07:35:51.111Z"),
                updated_at: new Date("2023-10-20T07:35:51.117Z")
            },
            {
                id: 7,
                name: "Налаживание прочных связей.png",
                alternativeText: "",
                caption: "",
                width: 1035,
                height: 584,
                formats: {
                    large: {
                        ext: ".png",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1697787558/large_Nalazhivanie_prochnyh_svyazej_27b00d1685.png",
                        hash: "large_Nalazhivanie_prochnyh_svyazej_27b00d1685",
                        mime: "image/png",
                        name: "large_Налаживание прочных связей.png",
                        path: null,
                        size: 640.73,
                        width: 1000,
                        height: 564,
                        provider_metadata: {
                            public_id: "large_Nalazhivanie_prochnyh_svyazej_27b00d1685",
                            resource_type: "image"
                        }
                    },
                    small: {
                        ext: ".png",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1697787562/small_Nalazhivanie_prochnyh_svyazej_27b00d1685.png",
                        hash: "small_Nalazhivanie_prochnyh_svyazej_27b00d1685",
                        mime: "image/png",
                        name: "small_Налаживание прочных связей.png",
                        path: null,
                        size: 179.32,
                        width: 500,
                        height: 282,
                        provider_metadata: {
                            public_id: "small_Nalazhivanie_prochnyh_svyazej_27b00d1685",
                            resource_type: "image"
                        }
                    },
                    medium: {
                        ext: ".png",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1697787560/medium_Nalazhivanie_prochnyh_svyazej_27b00d1685.png",
                        hash: "medium_Nalazhivanie_prochnyh_svyazej_27b00d1685",
                        mime: "image/png",
                        name: "medium_Налаживание прочных связей.png",
                        path: null,
                        size: 377.12,
                        width: 750,
                        height: 423,
                        provider_metadata: {
                            public_id: "medium_Nalazhivanie_prochnyh_svyazej_27b00d1685",
                            resource_type: "image"
                        }
                    },
                    thumbnail: {
                        ext: ".png",
                        url: "https://res.cloudinary.com/npomba/image/upload/v1697787557/thumbnail_Nalazhivanie_prochnyh_svyazej_27b00d1685.png",
                        hash: "thumbnail_Nalazhivanie_prochnyh_svyazej_27b00d1685",
                        mime: "image/png",
                        name: "thumbnail_Налаживание прочных связей.png",
                        path: null,
                        size: 49.16,
                        width: 245,
                        height: 138,
                        provider_metadata: {
                            public_id: "thumbnail_Nalazhivanie_prochnyh_svyazej_27b00d1685",
                            resource_type: "image"
                        }
                    }
                },
                hash: "Nalazhivanie_prochnyh_svyazej_27b00d1685",
                ext: ".png",
                mime: "image/png",
                size: 618.13,
                url: "https://res.cloudinary.com/npomba/image/upload/v1697787555/Nalazhivanie_prochnyh_svyazej_27b00d1685.png",
                previewUrl: null,
                provider: "cloudinary",
                provider_metadata: {
                    public_id: "Nalazhivanie_prochnyh_svyazej_27b00d1685",
                    resource_type: "image"
                },
                created_at: new Date("2023-10-20T07:39:22.989Z"),
                updated_at: new Date("2023-10-20T07:39:22.997Z")
            }
        ]
    });

    await prisma.skill.createMany({
        data: [
            {
                id: 1,
                title: "Риски в современном бизнесе ",
                string: "Научитесь определять и анализировать риски, с которыми сталкивается современный бизнес, и разрабатывать стратегии их управления",
                new: null
            },
            {
                id: 2,
                title: "Оценка и классификация рисков. Количественный анализ рисков. Построение корпоративной защиты ",
                string: "Сможете проводить оценку и классификацию рисков, использовать количественный анализ для их измерения, а также разрабатывать корпоративные стратегии защиты от потенциальных угроз",
                new: null
            },
            {
                id: 3,
                title: "Модели управления бизнес-рисками",
                string: "Вы узнаете о различных моделях управления бизнес-рисками, а также научитесь применять их на практике для минимизации негативных последствий для организации",
                new: null
            },
            {
                id: 4,
                title: "Управление рисками инвестиционных и инновационных проектов",
                string: "Вы будете способны эффективно управлять рисками инвестиционных и инновационных проектов, определяя стратегии снижения вероятности убытков и повышения успешности проектов",
                new: null
            },
            {
                id: 5,
                title: "Финансовый риск-менеджмент ",
                string: "Освоите методы анализа и управления финансовыми рисками, а также научитесь минимизировать потери и максимизировать доходы в условиях нестабильности рынка",
                new: null
            },
            {
                id: 6,
                title: "Основы менеджмента",
                string: "Приобретете знания о базовых принципах организации и управления командой, а также об основах планирования, контроля и мотивации сотрудников",
                new: null
            },
            {
                id: 7,
                title: "Управление проектами",
                string: "Освоите методики и инструменты управления проектами, научитесь эффективно планировать, контролировать и отчитываться о результатах работы",
                new: null
            },
            {
                id: 8,
                title: "Операционный менеджмент",
                string: "Погрузитесь в процессы оптимизации бизнес-процессов, повышения производительности и качества продукции, научитесь эффективно управлять ресурсами компании",
                new: null
            },
            {
                id: 9,
                title: "Управление человеческими ресурсами",
                string: "Узнаете, как эффективно формировать и развивать команды сотрудников, мотивировать их, управлять конфликтами и обеспечивать высокую производительность труда",
                new: null
            },
            {
                id: 10,
                title: "Организационное поведение",
                string: "Освоите принципы построения коммуникаций в коллективе, разберетесь в процессах мотивации и лидерства, а также научитесь эффективно управлять изменениями и конфликтами в организации",
                new: null
            },
            {
                id: 11,
                title: "Профессиональные навыки и личностное развитие руководителя",
                string: "Узнаете, как развить свой лидерский потенциал, управлять стрессом, повышать самомотивацию и эффективность своей работы",
                new: null
            },
            {
                id: 12,
                title: "Лидерство",
                string: "Освоите принципы успешного лидерства, управления изменениями, коммуникации с персоналом и вдохновения команды на достижение общих целей",
                new: null
            }
        ]
    });

    await prisma.moduleTool.createMany({
        data: [
            {
                id: 1,
                tool: 'Tool#1',
            },
            {
                id: 2,
                tool: 'Tool#2',
            },
            {
                id: 3,
                tool: 'Tool#3',
            },
            {
                id: 4,
                tool: 'Tool#4',
            },
            {
                id: 5,
                tool: 'Tool#5',
            },
            {
                id: 6,
                tool: 'Tool#6',
            },
            {
                id: 7,
                tool: 'Tool#7',
            },
            {
                id: 8,
                tool: 'Tool#8',
            },
            {
                id: 9,
                tool: 'Tool#9',
            },
            {
                id: 10,
                tool: 'Tool#10',
            },
        ]
    });

}
