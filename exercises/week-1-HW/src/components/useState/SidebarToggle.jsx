import { useState } from "react";

export const SidebarToggle = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div>
            <button onClick={toggleSidebar}>
                {isSidebarVisible ? 'Hide' : 'Show'} Sidebar
            </button>
            {isSidebarVisible && (
                <aside style={{ border: '1px solid yellow', padding: '10px', marginTop: '10px' }}>
                    <h2>Sidebar Content</h2>
                    <p>This is the content of the sidebar.</p>
                </aside>
            )}
        </div>
    );
}