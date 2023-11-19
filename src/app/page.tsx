import Container from "@/components/Container";
import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import Header from "@/components/Header";
import Description from "@/components/Description";
import LinkButton from "@/components/LinkButton";
import Image from "@/components/Image";

export default function LandingPage() {
  return (
    <Container>
      <Card>
        <CardContainer>
          <Image
            src="/images/ActiveHat-Shield.png"
            alt="ActiveHat Logo"
            width={200}
            height={170}
          />
          <Header>We are now Nebraska Programmer, LLC</Header>
          <Description>
            ActiveHat LLC is now Nebraska Programmer, LLC. Check out our new
            offerings.
          </Description>
          <LinkButton href="https://www.nebraskaprogrammer.com/">
            Visit Nebraska Programmer, LLC
          </LinkButton>
        </CardContainer>
      </Card>
    </Container>
  );
}
