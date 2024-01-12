import { LevelContext } from "./LevelContext";

function Section({level, children}) {
    const section = {
        border: '1px dotted',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px'
    }
    return ( 
        <section style={section}>
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
     );
}

export default Section;