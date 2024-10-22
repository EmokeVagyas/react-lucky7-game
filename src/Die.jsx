import "./Die.css";

function Die({ val, color }) {
    return (
        <div style={{ color }}>
            {val}
        </div>
    );
}

export default Die;