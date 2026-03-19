import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp03Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP03 — 구성 관리 시스템 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        리소스 구성을 코드로 정의하고 구성 관리 시스템으로 일관되게 적용합니다.
        구성 드리프트(실제 구성이 원하는 구성에서 벗어나는 현상)는 예측 불가능한 동작과 장애를 유발합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 리소스 구성이 코드로 정의되고 버전 관리됩니다.
        구성 드리프트가 자동으로 감지되고 수정됩니다.
        환경 간(개발, 스테이징, 운영) 구성 일관성이 보장됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>서버마다 수동으로 설정이 달라 "스노우플레이크 서버"가 발생하는 경우</li>
        <li>구성 변경을 코드 없이 직접 서버에 접속하여 수행하는 경우</li>
        <li>어떤 서버가 어떤 구성인지 파악하지 못하는 경우</li>
        <li>구성이 운영 환경에서만 적용되고 개발 환경에서는 다른 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>구성 드리프트 제거로 일관된 환경 운영</li>
        <li>신규 인스턴스 자동 구성으로 확장 시간 단축</li>
        <li>구성 변경 이력 추적 및 롤백 능력 확보</li>
        <li>보안 기준선 자동 적용으로 보안 강화</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Systems Manager State Manager로 EC2 인스턴스 구성을 자동으로 유지합니다.</li>
        <li>AWS Config로 리소스 구성 변경을 추적하고 드리프트를 감지합니다.</li>
        <li>AWS CloudFormation StackSets로 여러 계정/리전에 일관된 구성을 배포합니다.</li>
        <li>Ansible, Chef, Puppet 등 구성 관리 도구를 AWS 환경에 통합합니다.</li>
        <li>구성을 코드로 버전 관리하고 변경은 파이프라인을 통해서만 적용합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager State Manager — 구성 일관성 자동 유지</li>
        <li>AWS Config — 구성 변경 추적 및 드리프트 감지</li>
        <li>AWS CloudFormation — 인프라 구성을 코드로 관리</li>
        <li>AWS AppConfig — 애플리케이션 구성 안전하게 배포</li>
      </ul>

      <PageNav />
    </article>
  );
}
