import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps10Bp07Page() {
  return (
    <article className="doc-content">
      <h1>OPS10-BP07 — 이벤트에 대한 자동화된 대응</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        자동화를 통해 이벤트 대응을 가속화하고 인간 오류를 줄여
        일관되고 신뢰할 수 있는 운영 이벤트 처리를 실현합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        자동화를 통해 인간 오류를 줄이고 더 빠른 해결 시간을 실현합니다.
        자동화되고 일관된 이벤트 처리로 신뢰할 수 있는 운영을 달성합니다.
        반복적이고 수동적인 작업이 줄어들어 팀이 더 가치 있는 업무에 집중합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동 이벤트 처리로 지연과 오류가 발생하는 경우</li>
        <li>반복적이고 중요한 작업에서 자동화가 간과되는 경우</li>
        <li>반복적인 수동 작업으로 알림 피로와 중요한 문제 누락이 발생하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>시스템 다운타임을 줄이는 가속화된 이벤트 대응</li>
        <li>자동화되고 일관된 이벤트 처리로 신뢰할 수 있는 운영</li>
        <li>반복적이고 수동적인 작업 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>자동화 기회를 파악합니다(문제 교정, 티켓 보강, 용량 관리, 확장 및 배포, 테스트).</li>
        <li>자동화 프롬프트를 파악합니다(CloudWatch 알람 작업, EventBridge, 로그 항목, 성과 메트릭 임계값).</li>
        <li>AWS Systems Manager Automation 런북을 통한 이벤트 기반 자동화를 구현합니다.</li>
        <li>자동 인시던트 생성을 위해 AWS Incident Manager를 사용합니다.</li>
        <li>용량 관리를 위해 AWS Auto Scaling을 활용합니다.</li>
        <li>구성 드리프트를 위해 AWS Systems Manager State Manager를 사용합니다.</li>
        <li>비준수 리소스의 자동화된 교정을 위해 AWS Config Rules를 사용합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 알람 작업 및 메트릭 기반 자동화</li>
        <li>Amazon EventBridge — AWS 서비스, 커스텀 워크로드, SaaS를 위한 이벤트 기반 자동화</li>
        <li>AWS Systems Manager Automation — 런북 기반 자동화</li>
        <li>AWS Incident Manager — 자동 인시던트 생성</li>
        <li>AWS Config — 비준수 리소스 자동 교정</li>
        <li>AWS Auto Scaling — 용량 자동 관리</li>
        <li>AWS Security Hub — 보안 이벤트 자동 대응</li>
      </ul>

      <PageNav />
    </article>
  );
}
