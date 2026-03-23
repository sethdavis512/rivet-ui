import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SearchField } from '../components/SearchField';
import { ProfileCard } from '../components/ProfileCard';
import { AvatarLabel } from '../components/AvatarLabel';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from '../components/Card';
import { Input } from '../components/Input';
import { SwitchRoot, SwitchThumb } from '../components/Switch';
import {
    FieldRoot,
    FieldLabel,
    FieldControl,
    FieldDescription
} from '../components/Field';
import { Alert, AlertTitle, AlertDescription } from '../components/Alert';
import { TabsRoot, TabsList, TabsTab, TabsPanel } from '../components/Tabs';

const meta: Meta = {
    title: 'Showroom/Overview',
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj;


type AvatarColor =
    | 'ribbon'
    | 'mustard'
    | 'kraft'
    | 'denim'
    | 'spool'
    | 'canvas';

type BadgeVariant =
    | 'ribbon'
    | 'mustard'
    | 'kraft'
    | 'denim'
    | 'spool'
    | 'outline';

interface Contact {
    id: number;
    name: string;
    initials: string;
    email: string;
    phone: string;
    city: string;
    status: string;
    color: AvatarColor;
    badgeVariant: BadgeVariant;
    bio?: string;
}

const CONTACTS: Contact[] = [
    {
        id: 1,
        name: 'Frida Kahlo',
        initials: 'FK',
        email: 'frida@casaazul.mx',
        phone: '(555) 204-0701',
        city: 'Mexico City',
        status: 'Painter',
        color: 'mustard',
        badgeVariant: 'mustard',
        bio: 'Turned pain into radiant color. Her self-portraits are among the most honest art ever made.'
    },
    {
        id: 2,
        name: 'Yayoi Kusama',
        initials: 'YK',
        email: 'yayoi@polkadots.jp',
        phone: '(03) 5155-0202',
        city: 'Tokyo',
        status: 'Sculptor',
        color: 'spool',
        badgeVariant: 'spool'
    },
    {
        id: 3,
        name: 'Jean-Michel Basquiat',
        initials: 'JB',
        email: 'jean@downtown.nyc',
        phone: '(212) 555-0303',
        city: 'New York',
        status: 'Painter',
        color: 'kraft',
        badgeVariant: 'kraft'
    },
    {
        id: 4,
        name: 'Nina Simone',
        initials: 'NS',
        email: 'nina@highpriestess.com',
        phone: '(828) 555-0404',
        city: 'Tryon',
        status: 'Musician',
        color: 'denim',
        badgeVariant: 'denim',
        bio: 'The High Priestess of Soul, whose voice carried the full weight of the civil rights movement.'
    },
    {
        id: 5,
        name: 'David Bowie',
        initials: 'DB',
        email: 'david@starman.co.uk',
        phone: '(020) 7946-0505',
        city: 'London',
        status: 'Musician',
        color: 'ribbon',
        badgeVariant: 'ribbon'
    },
    {
        id: 6,
        name: 'Georgia O\'Keeffe',
        initials: 'GO',
        email: 'georgia@ghostranch.nm',
        phone: '(505) 555-0606',
        city: 'Santa Fe',
        status: 'Painter',
        color: 'canvas',
        badgeVariant: 'outline',
        bio: 'Found the infinite in desert bones and magnified flowers. The mother of American modernism.'
    }
];


function ContactsDirectoryPage() {
    const [search, setSearch] = React.useState('');

    const filtered = CONTACTS.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.city.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-canvas/20 font-sans text-kraft">
            <div className="mx-auto max-w-4xl space-y-6 px-6 py-8">
                <PageHeader
                    title="Artists"
                    subtitle={`${filtered.length} artist${
                        filtered.length !== 1 ? 's' : ''
                    }`}
                    actions={
                        <>
                            <Button variant="outline" size="sm">
                                Export
                            </Button>
                            <Button size="sm">Add Artist</Button>
                        </>
                    }
                />

                <SearchField
                    placeholder="Search by name, city, or email…"
                    value={search}
                    onValueChange={setSearch}
                />

                {filtered.length === 0 ? (
                    <p className="py-12 text-center text-kraft/50">
                        No artists found for "{search}"
                    </p>
                ) : (
                    <div className="overflow-hidden rounded-lg border border-kraft/10 bg-surface">
                        {filtered.map((contact) => (
                            <div
                                key={contact.id}
                                className="flex items-center justify-between border-b border-kraft/8 px-6 py-4 last:border-0"
                            >
                                <AvatarLabel
                                    initials={contact.initials}
                                    avatarColor={contact.color}
                                    name={contact.name}
                                    subtitle={contact.email}
                                />
                                <div className="flex items-center gap-3">
                                    <Badge variant={contact.badgeVariant}>
                                        {contact.status}
                                    </Badge>
                                    <span className="hidden text-sm text-kraft/50 sm:block">
                                        {contact.city}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export const ContactsDirectory: Story = {
    name: 'Artist Directory',
    render: () => <ContactsDirectoryPage />
};


function ContactProfilePage({ contact }: { contact: Contact }) {
    const [deleted, setDeleted] = React.useState(false);

    if (deleted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-canvas/20 font-sans">
                <div className="text-center text-kraft/60">
                    <p className="text-lg font-medium">Artist removed.</p>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="mt-3"
                        onClick={() => setDeleted(false)}
                    >
                        Undo
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-canvas/20 font-sans text-kraft">
            <div className="mx-auto max-w-2xl space-y-6 px-6 py-8">
                <PageHeader
                    eyebrow="Artists"
                    title={contact.name}
                    actions={
                        <>
                            <Button variant="outline" size="sm">
                                Edit
                            </Button>
                            <ConfirmDialog
                                title={`Delete ${contact.name}?`}
                                description="This will permanently remove them from your directory. This cannot be undone."
                                confirmLabel="Delete"
                                cancelLabel="Keep"
                                variant="destructive"
                                onConfirm={() => setDeleted(true)}
                                trigger={
                                    <Button variant="destructive" size="sm">
                                        Delete
                                    </Button>
                                }
                            />
                        </>
                    }
                />

                <ProfileCard
                    initials={contact.initials}
                    avatarColor={contact.color}
                    name={contact.name}
                    role={contact.city}
                    bio={contact.bio}
                    badge={contact.status}
                    badgeVariant={contact.badgeVariant}
                    actions={
                        <>
                            <Button variant="outline" size="sm">
                                Message
                            </Button>
                            <Button size="sm">Call</Button>
                        </>
                    }
                />

                <div className="rounded-lg border border-kraft/10 bg-surface p-6 space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-kraft/50">
                        Artist Info
                    </h2>
                    {[
                        { label: 'Email', value: contact.email },
                        { label: 'Phone', value: contact.phone },
                        { label: 'City', value: contact.city }
                    ].map(({ label, value }) => (
                        <div key={label}>
                            <p className="text-xs text-kraft/40 uppercase tracking-wide mb-0.5">
                                {label}
                            </p>
                            <p className="text-sm text-kraft">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const ContactProfile: Story = {
    name: 'Artist Profile — Frida Kahlo',
    render: () => <ContactProfilePage contact={CONTACTS[0]!} />
};

export const ContactProfileIcons: Story = {
    name: 'Artist Profile — Nina Simone',
    render: () => <ContactProfilePage contact={CONTACTS[3]!} />
};


function DashboardPage() {
    const statusCounts = CONTACTS.reduce<Record<string, number>>((acc, c) => {
        acc[c.status] = (acc[c.status] ?? 0) + 1;
        return acc;
    }, {});
    const cityCount = new Set(CONTACTS.map((c) => c.city)).size;

    return (
        <div className="min-h-screen bg-canvas/20 font-sans text-kraft">
            <div className="mx-auto max-w-5xl space-y-6 px-6 py-8">
                <PageHeader
                    title="Dashboard"
                    subtitle="Your creative directory at a glance"
                    actions={<Button size="sm">Add Artist</Button>}
                />

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                        {
                            label: 'Total',
                            value: CONTACTS.length,
                            color: 'text-kraft'
                        },
                        {
                            label: 'Painters',
                            value: statusCounts['Painter'] ?? 0,
                            color: 'text-mustard'
                        },
                        {
                            label: 'Musicians',
                            value: statusCounts['Musician'] ?? 0,
                            color: 'text-denim'
                        },
                        { label: 'Cities', value: cityCount, color: 'text-ribbon' }
                    ].map(({ label, value, color }) => (
                        <Card key={label}>
                            <CardContent className="pt-6">
                                <p className="text-xs font-medium uppercase tracking-wide text-kraft/40">
                                    {label}
                                </p>
                                <p
                                    className={`mt-1 text-3xl font-semibold ${color}`}
                                >
                                    {value}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                    <Card>
                        <CardHeader>
                            <CardTitle>By Discipline</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {Object.entries(statusCounts).map(
                                ([status, count]) => (
                                    <div
                                        key={status}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="w-28 shrink-0 text-sm text-kraft/60">
                                            {status}
                                        </span>
                                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-kraft/10">
                                            <div
                                                className="h-full rounded-full bg-ribbon transition-all"
                                                style={{
                                                    width: `${
                                                        (count /
                                                            CONTACTS.length) *
                                                        100
                                                    }%`
                                                }}
                                            />
                                        </div>
                                        <span className="w-4 text-right text-sm font-medium">
                                            {count}
                                        </span>
                                    </div>
                                )
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recently Added</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 pt-0">
                            {CONTACTS.slice(0, 4).map((contact) => (
                                <AvatarLabel
                                    key={contact.id}
                                    initials={contact.initials}
                                    avatarColor={contact.color}
                                    name={contact.name}
                                    subtitle={contact.city}
                                />
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export const Dashboard: Story = {
    name: 'Dashboard',
    render: () => <DashboardPage />
};


const STATUS_OPTIONS = [
    'Painter',
    'Musician',
    'Sculptor',
    'Filmmaker'
] as const;

function NewContactPage() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [city, setCity] = React.useState('');
    const [status, setStatus] = React.useState<string>('Painter');
    const [saved, setSaved] = React.useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSaved(true);
    }

    return (
        <div className="min-h-screen bg-canvas/20 font-sans text-kraft">
            <div className="mx-auto max-w-xl space-y-6 px-6 py-8">
                <PageHeader eyebrow="Artists" title="New Artist" />

                {saved && (
                    <Alert variant="info">
                        <AlertTitle>Artist added!</AlertTitle>
                        <AlertDescription>
                            {firstName} {lastName} has been added to your
                            directory.
                        </AlertDescription>
                    </Alert>
                )}

                <Card>
                    <CardContent className="pt-6">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <FieldRoot name="firstName">
                                    <FieldLabel>First name</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                placeholder="Frida"
                                                value={firstName}
                                                onChange={(e) =>
                                                    setFirstName(e.target.value)
                                                }
                                            />
                                        }
                                    />
                                </FieldRoot>
                                <FieldRoot name="lastName">
                                    <FieldLabel>Last name</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                placeholder="Kahlo"
                                                value={lastName}
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                            />
                                        }
                                    />
                                </FieldRoot>
                            </div>

                            <FieldRoot name="email">
                                <FieldLabel>Email</FieldLabel>
                                <FieldControl
                                    render={
                                        <Input
                                            type="email"
                                            placeholder="frida@casaazul.mx"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    }
                                />
                            </FieldRoot>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <FieldRoot name="phone">
                                    <FieldLabel>Phone</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                type="tel"
                                                placeholder="(555) 204-0701"
                                                value={phone}
                                                onChange={(e) =>
                                                    setPhone(e.target.value)
                                                }
                                            />
                                        }
                                    />
                                </FieldRoot>
                                <FieldRoot name="city">
                                    <FieldLabel>City</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                placeholder="Mexico City"
                                                value={city}
                                                onChange={(e) =>
                                                    setCity(e.target.value)
                                                }
                                            />
                                        }
                                    />
                                </FieldRoot>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm font-medium text-kraft">
                                    Discipline
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {STATUS_OPTIONS.map((s) => (
                                        <button
                                            key={s}
                                            type="button"
                                            onClick={() => setStatus(s)}
                                            className={[
                                                'rounded-full border px-3 py-1 text-sm transition-colors',
                                                status === s
                                                    ? 'border-ribbon bg-ribbon/10 font-medium text-ribbon'
                                                    : 'border-kraft/20 text-kraft/60 hover:border-kraft/40'
                                            ].join(' ')}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <CardFooter className="px-0 pt-2 justify-end gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        setFirstName('');
                                        setLastName('');
                                        setEmail('');
                                        setPhone('');
                                        setCity('');
                                        setStatus('Painter');
                                        setSaved(false);
                                    }}
                                >
                                    Clear
                                </Button>
                                <Button type="submit">Save Artist</Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export const NewContact: Story = {
    name: 'New Artist',
    render: () => <NewContactPage />
};


function SettingsPage() {
    const [name, setName] = React.useState('Frida Kahlo');
    const [email, setEmail] = React.useState('frida@casaazul.mx');
    const [profileSaved, setProfileSaved] = React.useState(false);

    const [emailNotifs, setEmailNotifs] = React.useState(true);
    const [pushNotifs, setPushNotifs] = React.useState(false);
    const [weeklyDigest, setWeeklyDigest] = React.useState(true);

    const [deleted, setDeleted] = React.useState(false);

    if (deleted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-canvas/20 font-sans">
                <div className="text-center text-kraft/60">
                    <p className="text-lg font-medium">Account deleted.</p>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="mt-3"
                        onClick={() => setDeleted(false)}
                    >
                        Undo
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-canvas/20 font-sans text-kraft">
            <div className="mx-auto max-w-2xl space-y-8 px-6 py-8">
                <PageHeader
                    title="Settings"
                    subtitle="Manage your account and preferences"
                />

                <TabsRoot defaultValue="profile">
                    <TabsList>
                        <TabsTab value="profile">Profile</TabsTab>
                        <TabsTab value="notifications">Notifications</TabsTab>
                        <TabsTab value="danger">Danger Zone</TabsTab>
                    </TabsList>

                    <TabsPanel value="profile" className="pt-6 space-y-6">
                        {profileSaved && (
                            <Alert variant="info">
                                <AlertTitle>Profile updated</AlertTitle>
                                <AlertDescription>
                                    Your changes have been saved.
                                </AlertDescription>
                            </Alert>
                        )}
                        <Card>
                            <CardContent className="space-y-4 pt-6">
                                <FieldRoot name="name">
                                    <FieldLabel>Display name</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                    setProfileSaved(false);
                                                }}
                                            />
                                        }
                                    />
                                </FieldRoot>
                                <FieldRoot name="email">
                                    <FieldLabel>Email address</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                type="email"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    setProfileSaved(false);
                                                }}
                                            />
                                        }
                                    />
                                    <FieldDescription>
                                        Used for notifications and sign-in.
                                    </FieldDescription>
                                </FieldRoot>
                            </CardContent>
                            <CardFooter className="justify-end">
                                <Button onClick={() => setProfileSaved(true)}>
                                    Save Changes
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsPanel>

                    <TabsPanel value="notifications" className="pt-6">
                        <Card>
                            <CardContent className="divide-y divide-kraft/8 pt-6">
                                {[
                                    {
                                        label: 'Email notifications',
                                        description:
                                            'Receive updates and activity via email.',
                                        checked: emailNotifs,
                                        onChange: setEmailNotifs
                                    },
                                    {
                                        label: 'Push notifications',
                                        description:
                                            'Get alerts sent to your device.',
                                        checked: pushNotifs,
                                        onChange: setPushNotifs
                                    },
                                    {
                                        label: 'Weekly digest',
                                        description:
                                            'A summary of activity every Monday.',
                                        checked: weeklyDigest,
                                        onChange: setWeeklyDigest
                                    }
                                ].map(
                                    ({
                                        label,
                                        description,
                                        checked,
                                        onChange
                                    }) => (
                                        <div
                                            key={label}
                                            className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                                        >
                                            <div>
                                                <p className="text-sm font-medium text-kraft">
                                                    {label}
                                                </p>
                                                <p className="text-xs text-kraft/50">
                                                    {description}
                                                </p>
                                            </div>
                                            <SwitchRoot
                                                checked={checked}
                                                onCheckedChange={onChange}
                                                aria-label={label}
                                            >
                                                <SwitchThumb />
                                            </SwitchRoot>
                                        </div>
                                    )
                                )}
                            </CardContent>
                        </Card>
                    </TabsPanel>

                    <TabsPanel value="danger" className="pt-6">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="font-medium text-spool">
                                            Delete account
                                        </p>
                                        <p className="mt-0.5 text-sm text-kraft/60">
                                            Permanently remove your account and
                                            all associated data. This cannot be
                                            undone.
                                        </p>
                                    </div>
                                    <ConfirmDialog
                                        title="Delete your account?"
                                        description="All your artists and data will be permanently deleted. There is no way to recover this information."
                                        confirmLabel="Delete account"
                                        cancelLabel="Cancel"
                                        variant="destructive"
                                        onConfirm={() => setDeleted(true)}
                                        trigger={
                                            <Button variant="destructive">
                                                Delete Account
                                            </Button>
                                        }
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsPanel>
                </TabsRoot>
            </div>
        </div>
    );
}

export const Settings: Story = {
    name: 'Settings',
    render: () => <SettingsPage />
};


type NotifType = 'mention' | 'reminder' | 'milestone' | 'system';

interface Notification {
    id: number;
    type: NotifType;
    message: string;
    contact: Contact;
    time: string;
    read: boolean;
}

const NOTIFICATIONS: Notification[] = [
    {
        id: 1,
        type: 'mention',
        message: 'Frida Kahlo commented on your note.',
        contact: CONTACTS[0]!,
        time: '2m ago',
        read: false
    },
    {
        id: 2,
        type: 'reminder',
        message: "Don't forget to follow up with Yayoi.",
        contact: CONTACTS[1]!,
        time: '1h ago',
        read: false
    },
    {
        id: 3,
        type: 'milestone',
        message: 'Nina Simone joined 1 year ago today.',
        contact: CONTACTS[3]!,
        time: '3h ago',
        read: true
    },
    {
        id: 4,
        type: 'system',
        message: 'Your export is ready to download.',
        contact: CONTACTS[4]!,
        time: 'Yesterday',
        read: true
    },
    {
        id: 5,
        type: 'mention',
        message: "Georgia O'Keeffe was added to the directory.",
        contact: CONTACTS[5]!,
        time: '2d ago',
        read: true
    }
];

const NOTIF_BADGE: Record<NotifType, BadgeVariant> = {
    mention: 'ribbon',
    reminder: 'mustard',
    milestone: 'denim',
    system: 'kraft'
};

function NotificationInboxPage() {
    const [notifications, setNotifications] = React.useState(NOTIFICATIONS);

    const unreadCount = notifications.filter((n) => !n.read).length;

    function markAllRead() {
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    }

    return (
        <div className="min-h-screen bg-canvas/20 font-sans text-kraft">
            <div className="mx-auto max-w-2xl space-y-6 px-6 py-8">
                <PageHeader
                    title="Notifications"
                    subtitle={
                        unreadCount > 0
                            ? `${unreadCount} unread`
                            : 'All caught up'
                    }
                    actions={
                        unreadCount > 0 ? (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={markAllRead}
                            >
                                Mark all read
                            </Button>
                        ) : undefined
                    }
                />

                <div className="space-y-2">
                    {notifications.map((notif) => (
                        <div
                            key={notif.id}
                            className={[
                                'flex items-start gap-4 rounded-lg border px-5 py-4 transition-colors',
                                notif.read
                                    ? 'border-kraft/10 bg-surface'
                                    : 'border-ribbon/20 bg-ribbon/5'
                            ].join(' ')}
                        >
                            <AvatarLabel
                                initials={notif.contact.initials}
                                avatarColor={notif.contact.color}
                                name=""
                                subtitle=""
                            />
                            <div className="flex-1 space-y-1">
                                <div className="flex items-start justify-between gap-3">
                                    <p className="text-sm text-kraft">
                                        {notif.message}
                                    </p>
                                    <span className="shrink-0 text-xs text-kraft/40">
                                        {notif.time}
                                    </span>
                                </div>
                                <Badge
                                    variant={NOTIF_BADGE[notif.type]}
                                    className="capitalize"
                                >
                                    {notif.type}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const NotificationInbox: Story = {
    name: 'Notification Inbox',
    render: () => <NotificationInboxPage />
};
