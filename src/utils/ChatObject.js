export const RobotQuestions = [
  { id: 0, text: "Hi 👏", condition: undefined, type: "text", role: "robot" },
  {
    id: 1,
    text: "I'm Emily from Health Benefits",
    condition: undefined,
    type: "text",
    role: "robot",
  },
  {
    id: 2,
    text: "Want to find out if you or your family qualify for up to a $6,400 subsidy as a Healthcare Tax Credit? Tap Yes if so! 😀",
    condition: undefined,
    type: "text",
    role: "robot",
  },
  {
    id: 3,
    type: "input",
    inputs: [{ type: "button", value: "yes" }],
    response: "",
    condition: undefined,
    role: "robot",
  },
  {
    id: 4,
    type: "text",
    text: "Okay, let me ask you a couple quick questions.",
    condition: `orginialChatReplica[3]?.response === 'yes'`,
    role: "robot",
  },
  {
    id: 5,
    type: "text",
    text: "Do you make less than $60,000/year? Tap Yes or No.",
    condition: `orginialChatReplica[3]?.response === 'yes'`,
    role: "robot",
  },
  {
    id: 6,
    inputs: [
      { type: "button", value: "yes" },
      { type: "button", value: "no" },
    ],
    type: "input",
    response: "",
    condition: `orginialChatReplica[3]?.response==='yes' || orginialChatReplica[3]?.response==='no'`,
    role: "robot",
  },
  {
    id: 7,
    type: "text",
    text: "Are you over or under 65?",
    role: "robot",
    condition: `orginialChatReplica[3]?.response==='yes' || orginialChatReplica[3]?.response==='no'`,
  },
  {
    id: 8,
    inputs: [
      { type: "button", value: "over 65" },
      { type: "button", value: "under 65" },
    ],
    type: "input",
    response: "",
    condition: `orginialChatReplica[3]?.response==='yes' || orginialChatReplica[3]?.response==='no'`,
    role: "robot",
  },
  {
    id: 9,
    type: "text",
    text: "Are you on Medicaid or Medicare?",
    condition: `orginialChatReplica[8]?.response=== 'under 65'`,
    role: "robot",
  },
  {
    id: 10,
    inputs: [
      { type: "button", value: "medicare" },
      { type: "button", value: "medicaid" },
      { type: "button", value: "no" },
    ],
    type: "input",
    response: "",
    condition: `orginialChatReplica[8]?.response==='under 65'`,
    role: "robot",
  },
  {
    id: 11,
    type: "text",
    text: " Do you have Medicare parts A and B?",
    condition: `orginialChatReplica[8]?.response ==='over 65'|| (orginialChatReplica[10]?.response ==='medicare' && orginialChatReplica[8]?.response ==='under 65')`,
    role: "robot",
  },
  {
    id: 12,
    inputs: [
      { type: "button", value: "yes" },
      { type: "button", value: "no" },
    ],
    type: "input",
    response: "",
    condition: `orginialChatReplica[8]?.response ==='over 65'|| (orginialChatReplica[10]?.response ==='medicare' && orginialChatReplica[8]?.response ==='under 65')`,
    role: "robot",
  },
  {
    id: 13,
    type: "text",
    text: "Great News! 🎉",
    condition: `(((orginialChatReplica[12]?.response==='yes'||orginialChatReplica[12]?.response==='no') && orginialChatReplica[10]?.response==='medicare') ||orginialChatReplica[10]?.response==='medicaid') && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 14,
    type: "text",
    text: "Although you aren’t qualified for a Health Subsidy, agencies are now offering Medicare Advantage coverage in your area.",
    condition: `orginialChatReplica[12]?.response==='yes'&&orginialChatReplica[10]?.response==='medicare' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 15,
    type: "text",
    text: "Although you aren’t qualified for a Health Subsidy, agencies are now offering free cellular plans and phones.",
    condition: `orginialChatReplica[12]?.response==='no'&&orginialChatReplica[10]?.response==='medicare' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 16,
    type: "text",
    text: "Click the link below to secure your free phone and cellular data plan now!",
    condition: `orginialChatReplica[12]?.response==='no'&&orginialChatReplica[10]?.response==='medicare' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 17,
    inputs: [
      {
        type: "button",
        value: "Get My Free Phone!",
        externalLink: true,
        href: "https://273externalid.mvnocloudsolutions.com/?AccountID=20",
      },
    ],
    type: "input",
    response: "",
    condition: `orginialChatReplica[12]?.response==='no'&&orginialChatReplica[10]?.response==='medicare' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },

  {
    id: 18,
    type: "text",
    text: "Call the number below to learn more about what you could qualify for:",
    condition: `orginialChatReplica[12]?.response==='yes'&&orginialChatReplica[10]?.response==='medicare' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 19,
    inputs: [
      {
        type: "button",
        value: "(877) 694-0899",
        externalLink: true,
        href: "tel:+18776940899",
      },
    ],
    type: "input",
    response: "",
    condition: `orginialChatReplica[12]?.response==='yes'&&orginialChatReplica[10]?.response==='medicare' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 20,
    type: "text",
    text: "🎉 Congratulations! 🎁",
    condition: `orginialChatReplica[10]?.response==='no' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 21,
    type: "text",
    text: "You or your family may qualify for up to a $6,400 subsidy as a Healthcare Tax Credit",
    condition: `orginialChatReplica[10]?.response==='no' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 22,
    type: "text",
    text: "Tap the number button below to call now to see if you qualify, the initial call only takes a few minutes.",
    condition: `orginialChatReplica[10]?.response==='no' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 23,
    inputs: [
      {
        type: "button",
        value: "(877) 546-7287",
        externalLink: true,
        href: "tel:+18775467287",
      },
    ],
    type: "input",
    response: "",
    condition: `orginialChatReplica[10]?.response==='no' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 24,
    inputs: [
      {
        type: "button",
        value: "(844) 760-3917",
        externalLink: true,
        href: "tel:+18447603917",
      },
    ],
    type: "input",
    response: "",
    condition: `((orginialChatReplica[12]?.response ==='no'&&  orginialChatReplica[10]?.response === 'medicare' )|| orginialChatReplica[10]?.response==='no') && orginialChatReplica[8]?.response ==='under 65' && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 25,
    type: "text",
    text: "Although you don't qualify for the health insurance subsidy, this new program can allow you increase your credit score quickly.",
    condition: `orginialChatReplica[10]?.response==='medicaid' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 26,
    inputs: [
      {
        type: "button",
        value: "Increase my credit score!",
        externalLink: true,
        href: "https://kikoff.com/?irclickid=VbuU8SQl-xyPWWl31GWJ3xHTUkHwtIVI%3Aw3VVo0&irgwc=1&utm_source=referral&utm_medium=partner&utm_campaign=mdvm_59530&utm_content=164028",
      },
    ],
    type: "input",
    response: "",
    condition: `orginialChatReplica[10]?.response==='medicaid' && orginialChatReplica[8]?.response ==='under 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 27,
    type: "text",
    text: "Great News! 🎉",
    condition: `(orginialChatReplica[12]?.response=== 'yes'||orginialChatReplica[12]?.response=== 'no') && orginialChatReplica[8]?.response ==='over 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 28,
    type: "text",
    text: "Although you aren’t qualified for a Health Subsidy, agencies are now offering Medicare Advantage coverage in your area.",
    condition: `orginialChatReplica[12]?.response=== 'yes' && orginialChatReplica[8]?.response ==='over 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 29,
    inputs: [
      {
        type: "button",
        value: "(877) 694-0899",
        externalLink: true,
        href: "tel:+18776940899",
      },
    ],
    type: "input",
    response: "",
    condition: `orginialChatReplica[12]?.response=== 'yes' && orginialChatReplica[8]?.response ==='over 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 30,
    type: "text",
    text: "Although you aren’t qualified for a Health Subsidy, agencies are now offering free cellular plans and phones.",
    condition: `orginialChatReplica[12]?.response=== 'no' && orginialChatReplica[8]?.response ==='over 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 31,
    type: "text",
    text: " Click the link below to secure your free phone and cellular data plan now!",
    condition: `orginialChatReplica[12]?.response=== 'no' && orginialChatReplica[8]?.response ==='over 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
  {
    id: 32,
    inputs: [
      {
        type: "button",
        value: "Get My Free Phone!",
        externalLink: true,
        href: "https://273externalid.mvnocloudsolutions.com/?AccountID=20",
      },
    ],
    type: "input",
    response: "",
    condition: `orginialChatReplica[12]?.response=== 'no' && orginialChatReplica[8]?.response ==='over 65'  && orginialChatReplica[3]?.response==='yes' `,
    role: "robot",
  },
];
