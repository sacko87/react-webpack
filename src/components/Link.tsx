import * as React from "react";

export interface LinkProps {
    active: boolean;
    children: React.ReactNode;
    onClick?(): void;
}

export default class Link extends React.Component<LinkProps, any> {
    public render() {
        if (this.props.active) {
            return <span>{this.props.children}</span>;
        }

        return (
            <a
                href=""
                onClick={e => {
                    e.preventDefault();
                    this.props.onClick && this.props.onClick();
                }}
                >
                {this.props.children}
            </a>
        );
    }
}