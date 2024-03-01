export const aQuestions = {
  status: 200,
  data: {
    forms: [
      {
        name: "type",
        question: "어떤 종류의 술을 좋아하시나요?",
        required: true,
        type: "radioWithInput",
        placeholder: [
          {
            label: "맥주",
            value: "beer",
            checked: false,
          },
          {
            label: "와인",
            value: "wine",
            checked: false,
          },
          {
            label: "소주",
            value: "soju",
            checked: false,
          },
          {
            label: "막걸리",
            value: "Makgeolli",
            checked: false,
          },
          {
            label: "기타",
            value: "extra",
            checked: false,
          },
        ],
        validate: [
          {
            type: "minMaxLength",
            target: [1, "-"],
            validateText: "반드시 한 개는 선택해야 합니다.",
          },
        ],
      },
      {
        name: "pairing",
        question: "어떤 안주를 선호하시나요?",
        required: true,
        type: "radioWithInput",
        placeholder: [
          {
            label: "마른 안주",
            value: "drySnack",
            checked: false,
          },
          {
            label: "과일 안주",
            value: "fruit",
            checked: false,
          },
          {
            label: "과자",
            value: "snack",
            checked: false,
          },
          {
            label: "매운 음식",
            value: "spicy",
            checked: false,
          },
          {
            label: "치즈",
            value: "cheeze",
            checked: false,
          },
          {
            label: "기타",
            value: "extra",
            checked: false,
          },
        ],
        validate: [
          {
            type: "minMaxLength",
            target: [1, "-"],
            validateText: "반드시 한 개는 선택해야 합니다.",
          },
        ],
      },
      {
        name: "best",
        question: "본인의 최고의 조합을 말해주세요",
        required: true,
        type: "text",
        placeholder: "",
        validate: [
          {
            type: "minMaxLength",
            target: [5, "-"],
            validateText: "술과 안주 조합을 입력해주세요.",
          },
        ],
      },
      {
        name: "nonAlcohol",
        question: "무알콜 맥주를 드셔본적 있나요?",
        required: true,
        type: "radio",
        placeholder: [
          {
            label: "네",
            value: "yes",
            checked: false,
          },
          {
            label: "아니오",
            value: "no",
            checked: false,
          },
        ],
        validate: [
          {
            type: "minMaxLength",
            target: [1, "-"],
            validateText: "반드시 한 개는 선택해야 합니다.",
          },
        ],
      },
    ],
    escapeValidate: [],
  },
};
