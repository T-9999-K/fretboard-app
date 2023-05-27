import { createContext, useContext, useState } from "react";

type PressFletData = {
  fletNo: number
  stringsNo: number
}

type PressFletContextType = {
  pressFlets: PressFletData[]
  setPressFlets: (pressFlets: PressFletData[]) => void
}

// contextの作成
export const PressFletMarksContext = createContext<PressFletContextType>({
  pressFlets: [],
  setPressFlets: (pressFlets: PressFletData[]) => {},
});

// プロバイダ
export const PressFletMarksProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    // 押弦状態の初期値
    const [pressFlets, setPressFlets] = useState<PressFletData[]>([]);

    return (
      <PressFletMarksContext.Provider value={{pressFlets, setPressFlets}}>
          {children}
      </PressFletMarksContext.Provider>
    );
}