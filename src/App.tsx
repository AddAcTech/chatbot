import "./App.css";
import { DeepChat } from "deep-chat-react";
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

function App() {
  return (
    <div>
      <DeepChat
        // demo={true}
        connect={{ stream: true }}
        directConnection={{
          openAI: {
            key: apiKey,
            chat: {
              max_tokens: 500,
            },
          },
        }}
        textInput={{ placeholder: { text: "Escribe un mensaje" } }}
      />
    </div>
  );
}

export default App;
