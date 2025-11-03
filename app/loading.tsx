import '../ui/loading.css';

export default function Loading() {
    return (
        <div className="container">
            <div className="loader">
                <div className="panWrapper">
                    <div className="pan">
                        <div className="food"></div>
                        <div className="panBase"></div>
                        <div className="panHandle"></div>
                    </div>
                    <div className="panShadow"></div>
                </div>
            </div>
        </div>
    );
}