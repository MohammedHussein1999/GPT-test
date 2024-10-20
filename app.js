// API key الخاص بك من Hugging Face
const API_KEY = "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";

// عندما يضغط المستخدم على زر التحليل
document.getElementById("submit-button").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value;

  if (userInput) {
    analyzeText(userInput);
  } else {
    document.getElementById("result").innerText =
      "Please enter text to analyze.";
  }
});

async function analyzeText(text) {
  try {
    // الاتصال بـ Hugging Face Inference API
    const response = await fetch(
      "https://api-inference.huggingface.co/models/HuggingFaceH4/starchat2-15b-v0.1/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/Llama-3.2-11B-Vision-Instruct",
          messages: [
            {
              role: "user",
              content: text,
            },
          ],

          max_tokens: 500,
        }),
      }
    );

    const result = await response.json();
    console.log(result.choices[0].message.content);

    // عرض النتيجة على الشاشة
    document.getElementById("response-output").innerText =
      result.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("result").innerText =
      "An error occurred while analyzing the text.";
  }
}
